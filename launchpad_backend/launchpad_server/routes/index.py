from launchpad_server import app
from flask import render_template, request, flash, redirect, url_for,jsonify
from .forms import SignupForm, LoginForm  
from flask_login import login_user
from flask_bcrypt import Bcrypt
from flask_pymongo import PyMongo
from flask_cors import CORS
import pymongo
import sys
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

@app.route("/api/signup", methods = ['POST', "GET"])
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
        
        
        user_count = mongo.db.user.count_documents({})
        hashed_password = bcrypt.generate_password_hash (password).decode('utf-8') 

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

        user_exists = mongo.db.get_collection("user").find_one({"email": username})
       
        if user_exists:
            print("USER THERE")
            response = {'message': 'User already exists'}
            for key, value in user_exists.items():
               if key == "email":
                   if value == username:
                        print (value)

        else:
            mongo.db.get_collection("user").insert_one(data_to_insert)
            response = {'message': 'User registered successfully'}

        print('length: ', user_count)
        
        return jsonify(response)
        #user_table = mongo.db.get_collection("user").find_one({"email": "alishba.aamir@yahoo.com"})
        #print(user_table)
    return jsonify(response)


@app.route("/api/login", methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.get_json()
        print(data)
        username = data.get('username')
        password = data.get('password')
        print(
            "username: ", username,
            "\npasssword: ", password)
    
    response = {'message': 'User registered successfully'}
    return (response)
    """
    form = LoginForm()
    if form.validate_on_submit():
        email = request.form['email']
        password =  request.form['password']
        return f'Hello, {email}. Your password is {password}.'  
    else:
        print('something wrong')
        flash('Login failed. Please check your email and password.', 'danger')
    return render_template('login.html', title='Login', form=form)
    """

