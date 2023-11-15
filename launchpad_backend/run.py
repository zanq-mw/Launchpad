from launchpad_server import app


# start the backend server
if __name__ == "__main__":
    app.run(host="localhost", port=5001, debug=True)
