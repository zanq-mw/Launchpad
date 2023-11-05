# Launchpad

## Running Backend

1. Clone repo
2. Go to launchpad_backend directory `cd launchpad_backend`
3. Install the required dependencies Windows: `pip install -r requirements.txt` Mac: `pip3 install -r requirements.txt`
4. Run `python run.py` in terminal
5. Navigate to http://localhost:5000/ on your browser to see app locally

## Running Frontend

1. Clone repo
2. Go to launchpad-frontend directory `cd launchpad-frontend`
3. Run `npm install` in terminal to install all required dependencies
4. Ensure backend server is running (see above)
5. Run `npm start` in terminal
6. Navigate to http://localhost:3000/ on your browser to see app locally

## Running MongoDB UI to see and edit data (Optional)

All interaction with the db is through the backend so this step is not neccessary but it makes things easier when you want to see all the data and if you want to try editing data quickly

1. Install MongoDB with default settings: https://www.mongodb.com/try/download/community
2. Ensure backend server is running (see above)
3. In MongoDB, establish a new connection with URI mongodb://localhost:27017/database
