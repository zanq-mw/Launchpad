from launchpad_server import app
from flask_wtf import FlaskForm
from wtforms import StringField,SelectField, PasswordField, SubmitField, BooleanField,IntegerField
from wtforms.validators import DataRequired,Length,Email,EqualTo, NumberRange


app.config['SECRET_KEY'] = 'ndjdsjb2768798vcfds'

class SignupForm(FlaskForm):
    
    last_name = StringField('Last name',validators=[DataRequired(),Length(min=2,max=20)],render_kw={"placeholder":""})
    first_name = StringField('First name',validators=[DataRequired(),Length(min=2,max=20)],render_kw={"placeholder":""})
    year = IntegerField('Year',validators=[DataRequired(),NumberRange(min=0, max=10)],render_kw={"placeholder":""})
    program= SelectField('Program', 
                         choices=[ 
                                  ('', 'Select an option'),
                                  ('Computer Science', 'Computer Science'), 
                                  ('Accounting', 'Accounting'),
                                  ('Nursing', 'Nursing'),
                                  ('Dentistry', 'Dentistry'),
                                  ('Mechanical Engineering', 'Mechanical Engineering'),
                                  ('Mathematics', 'Mathematics'),
                                  ('Political Science', 'Political Science'), 
                                  ],
                                  render_kw={"placeholder":""})
    email = StringField('Email',   validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    confirm_password = PasswordField('Confirm Password', validators=[DataRequired(),EqualTo('password')],render_kw={"placeholder":""})

    submit=SubmitField('Sign Up')

class LoginForm(FlaskForm):
    email = StringField('Email',   validators=[DataRequired(), Email()])
    
    password = PasswordField('Password', validators=[DataRequired()])

    remember = BooleanField('Remeber Me')
    submit = SubmitField('Login')