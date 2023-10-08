from launchpad_server import app
from flask import render_template, request, flash, redirect, url_for
from .forms import SignupForm, LoginForm  
from flask_login import login_user
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)

class User:
    def __init__(self, email, password):
        self.email = email
        self.password = password

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

