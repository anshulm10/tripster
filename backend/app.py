from flask import Flask, request
from flask_cors import CORS
from maps import Maps

app = Flask(__name__)
CORS(app)


@app.route("/submit", methods=["POST"])
def optimus():
    data = request.get_json()
    data = dict(data)
    m = Maps(data)
    resp = {"map": m.get_map(), "spots": m.get_hotels()}
    return resp


if __name__ == "__main__":
    app.run(debug=True)
