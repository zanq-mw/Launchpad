from launchpad_server import app
from flask import render_template, request, flash, redirect, url_for,jsonify
from .forms import SignupForm, LoginForm  
from flask_login import login_user
from flask_bcrypt import Bcrypt
from flask_pymongo import PyMongo
import pymongo
import sys
import re
sys.path.append('./launchpad_server/routes')
from startup_data import startup_data

app.config['MONGO_URI'] = 'mongodb://localhost:27017/database'

# Initialize the PyMongo extension
mongo = PyMongo(app)


bcrypt = Bcrypt(app)

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

@app.route("/register", methods = ['POST', 'GET'])
def register():
    form = SignupForm()
    if form.validate_on_submit():
        hash_pass =  bcrypt.generate_password_hash(request.form['password']).decode('utf-8')
        check_pass = bcrypt.check_password_hash(hash_pass, request.form['confirm_password'])                      
        if check_pass:
            return landing(form)
    return render_template('register.html',title='SignUp', form=form)

@app.route("/login", methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        email = request.form['email']
        password =  request.form['password']
        return f'Hello, {email}. Your password is {password}.'  
    else:
        print('something wrong')
        flash('Login failed. Please check your email and password.', 'danger')
    return render_template('login.html', title='Login', form=form)

