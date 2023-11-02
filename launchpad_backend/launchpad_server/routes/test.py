from launchpad_server import app


@app.route("/test", methods=['POST', 'GET'])
def test():
    return {
        "mssg": 'Connected to backend succesfully'
    }
