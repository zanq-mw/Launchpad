from launchpad_server import app
from flask import render_template, request, flash, redirect, url_for,jsonify
from .forms import SignupForm, LoginForm  
from flask_login import login_user
from flask_bcrypt import Bcrypt
from flask_pymongo import PyMongo
from flask_cors import CORS
from flask_bcrypt import check_password_hash
from flask import session  
import pymongo
import sys
sys.path.append('.\\launchpad_server\\routes')
from startup_data import startup_data
app.config['MONGO_URI'] = 'mongodb://localhost:27017/database'

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
    if request.method == 'POST':
        data = request.get_json()
        print(data)
        fname =  data.get('lname')
        lname =data.get('lname')
        year = data.get('year')
        program = data.get('program')
        username = data.get('username')
        password = data.get('password')
        print(
            "First Name: ", fname,
            "\nLast Name: ", lname,
            "\nYear: ", year,
            "\nProgram ", program,
            "\nusername: ", username,
            "\npasssword: ", password)
    
    response = {'message': 'User registered successfully'}
    return (response)
    """
    form = SignupForm()
    if form.validate_on_submit():
        hash_pass =  bcrypt.generate_password_hash(request.form['password']).decode('utf-8')
        check_pass = bcrypt.check_password_hash(hash_pass, request.form['confirm_password'])                      
        if check_pass:
            return landing(form)
    return render_template('register.html',title='SignUp', form=form)
    """


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
            for key, value in user_data.items():
               #print(f"{key}: {value}")
               if key == "password":
                if value == password:
                    stored_password = user_data.get("password")
                    rehashed_stored_password = bcrypt.generate_password_hash(stored_password).decode('utf-8') #To check if the hashed password is taken
                    if bcrypt.check_password_hash(rehashed_stored_password, password):
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
        else:
            response = {"message": "Incorrect Password"}
            return jsonify(response)

        response = {"message": "Incorrect Password"}
        return jsonify(response)
