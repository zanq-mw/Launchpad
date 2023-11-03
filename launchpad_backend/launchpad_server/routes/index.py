from launchpad_server import app
from flask import render_template, request, flash, redirect, url_for,jsonify
from .forms import SignupForm, LoginForm  
from flask_login import login_user
from flask_bcrypt import Bcrypt
from flask_pymongo import PyMongo
import pymongo
import sys
sys.path.append('.\\launchpad_server\\routes')
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


@app.route("/applications")
def check_db():
    # Select * from application where userId=1
    collection = mongo.db.application
    query = {"userId": 1}
    result = list(collection.find(query))

    for doc in result:
        doc["_id"] = str(doc["_id"])
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

