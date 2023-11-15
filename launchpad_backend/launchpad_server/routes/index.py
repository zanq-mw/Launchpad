from launchpad_server import app
from flask import render_template, request, flash, redirect, url_for,jsonify
from .forms import SignupForm, LoginForm  
from flask_login import login_user
from flask_bcrypt import Bcrypt, check_password_hash
from flask_pymongo import PyMongo
from flask_cors import CORS
from flask_cors import CORS
from flask import session  
import pymongo
import sys
import re
sys.path.append('.\\launchpad_server\\routes')
from startup_data import startup_data
app.config['MONGO_URI'] = 'mongodb://localhost:27017/database'
from datetime import datetime

# Initialize the PyMongo extension
mongo = PyMongo(app)
bcrypt = Bcrypt(app)


CORS(app, origins='*')


def setup_db():
    for data in startup_data:
        collection = mongo.db[data["tableName"]] # similar to table in relational db
        collection.drop()
        insertList = []

        for record in data["records"]: # similar to row in relational db
            insertList.append(record)

        collection.insert_many(insertList)
        collection.create_index([(data["index"], pymongo.ASCENDING)], unique=True) # Enforces primary key like restrcitions

setup_db() # Resets db to startup_data everytime backend is saved or ran


@app.route("/applications/<int:user_id>")
def get_applications(user_id):
    # Select * from application where userId=user_id
    collection = mongo.db.application
    query = {"userId": user_id}
    result = list(collection.find(query))

    for doc in result:
        doc.pop("_id")
    return (jsonify({"data": result}))   

@app.route("/notifications/<int:user_id>")
def get_notifications(user_id):
    user_collection = mongo.db.user
    user_query = {"userId": user_id}
    user_result = user_collection.find_one(user_query)

    if not user_result:
        return jsonify({"data": []})  # Return an empty list if user not found

    notifications_ids = user_result.get("notifications", [])

    # Select notifications where notificationId is in notifications_ids
    notification_collection = mongo.db.notification
    notification_query = {"notificationId": {"$in": notifications_ids}}
    notification_result = list(notification_collection.find(notification_query))

    for doc in notification_result:
        doc.pop("_id")

    return jsonify({"data": notification_result})

@app.route("/notifications/<int:notification_id>/mark-as-read", methods=["PUT"])
def mark_notification_as_read(notification_id):
    # Connect to the notifications collection
    collection = mongo.db.notification

    # Find the notification by notificationId
    query = {"notificationId": notification_id}
    notification = collection.find_one(query)

    if notification:
        # Update the read status to True
        collection.update_one({"_id": notification["_id"]}, {"$set": {"read": True}})

        return jsonify({"message": f"Notification {notification_id} marked as read."}), 200
    else:
        return jsonify({"error": "Notification not found."}), 404
    
@app.route("/notifications/<int:notification_id>/toggle-saved", methods=["PUT"])
def toggle_notification_saved(notification_id):
    # Connect to the notifications collection
    collection = mongo.db.notification

    # Find the notification by notificationId
    query = {"notificationId": notification_id}
    notification = collection.find_one(query)

    if notification:
        # Toggle the saved status (change True to False, and vice versa)
        new_saved_status = not notification.get("saved", False)

        # Update the saved status
        collection.update_one({"_id": notification["_id"]}, {"$set": {"saved": new_saved_status}})

        return jsonify({"message": f"Notification {notification_id} saved status toggled."}), 200
    else:
        return jsonify({"error": "Notification not found."}), 404

@app.route("/jobs")
def get_jobs():
    # Select * from posting where postingTitle LIKE user_id

    # get all of the query strings
    type_filter = request.args.get('type')
    duration_filter = request.args.get('duration')
    location_filter = request.args.get('location')
    # transform everything to queryable strings
    everything_regex = re.compile(".*")
    type_regex = everything_regex if type_filter == "null" else type_filter 
    duration_regex = everything_regex if duration_filter == "null" else duration_filter 
    location_regex = everything_regex if location_filter == "null" else location_filter
    # access database
    collection = mongo.db.posting
    query = {"type": type_regex, "duration": duration_regex, "workModel": location_regex}
    result = list(collection.find(query))

    for doc in result:
        doc.pop("_id")
    return (jsonify({"data": result}))

@app.route("/companies")
def get_companies():
    # Select * from company

    # access database
    collection = mongo.db.company
    query = {}
    result = list(collection.find(query))

    for doc in result:
        doc.pop("_id")
    return (jsonify({"data": result}))   

@app.route("/users/<int:user_id>")
def get_users(user_id):
    # Select * from users where userId=user_id
    collection = mongo.db.user
    query = {"userId": user_id}
    result = list(collection.find(query))

    for doc in result:
        doc.pop("_id")
    return (jsonify({"data": result}))   

@app.route("/check_db")
def check_db():
    # Check if the connection is successful
    if mongo.cx:
        return "Connected to MongoDB successfully!" 
    

@app.route("/", methods = ['POST', 'GET'])
def index():
    return "Hello from Flask Backend"


@app.route("/home", methods = ['POST', 'GET'])
def landing(form):
        return render_template('landing.html',title='Landing Page',form=form)

@app.route("/signup", methods = ['POST', "GET"])
def register():
    response = "none"
    if request.method == 'POST':
        data = request.get_json()
        #print(data)
        fname =  data.get('fname')
        lname =data.get('lname')
        year = data.get('year')
        program = data.get('program')
        username = data.get('username')
        password = data.get('password')
        """
        print(
            "First Name: ", fname,
            "\nLast Name: ", lname,
            "\nYear: ", year,
            "\nProgram ", program,
            "\nusername: ", username,
            "\npasssword: ", password)

        """
        
        
        user_count = mongo.db.user.count_documents({}) # count user -> for user ID
        hashed_password = bcrypt.generate_password_hash (password).decode('utf-8') #encrypt Password

        data_to_insert = {
            "userId": user_count+1,
            "email": username, 
            "password": hashed_password, 
            "firstName": fname, 
            "lastName": lname, 
            "year": year, 
            "program": program,
            "address": {        # If address is not specified for a record, do not include this key-value pair in the dictionary
                "streetAddress": "",
                "postalCode": "",
                "province": ""
            },
            "phoneNumber": "",  # If number is not specified for a record, do not include this key-value pair in the dictionary
            "twoFactor": False,
            "dataCollection": True,
            "savedPostings": [{
                "dateTime": "", 
                "postingId": ""
            }],
            "notifications": []  # Ids of all their notifications
        }

        user_exists = mongo.db.get_collection("user").find_one({"email": username}) #check if user exists
       
        if user_exists:
            response = {'message': 'User already exists'}
        else:
            mongo.db.get_collection("user").insert_one(data_to_insert)
            response = {'message': 'User registered successfully'}
        return jsonify(response)
        
    return jsonify(response)
@app.route("/api/login", methods=['POST'])
def login():
    if request.method == 'POST':
        data = request.get_json()
        print(data)
        username = data.get('username')
        password = data.get('password')
        print(
            "Username: ", username,
            "\nPassword: ", password)

        user_data = mongo.db.get_collection("user").find_one({"email": username})

        if user_data:
            stored_password_hashed = user_data.get("password")

            if stored_password_hashed and check_password_hash(stored_password_hashed, password):
                user_id = user_data.get("userId") 
                session['user_id'] = str(user_id)

                user_info = {
                    "userId": user_data.get("userId"),
                    "email": user_data.get("email"),
                    "firstName": user_data.get("firstName"),
                }

                response = {
                    "message": "User Logged In successfully",
                    "user_info": user_info  
                }
                return jsonify(response)

        response = {"message": "User does not exist or Incorrect Password"}
        return jsonify(response)
