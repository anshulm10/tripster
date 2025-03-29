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
    resp = {"map": m.get_map(), "spots": m.get_hotels(), "nearby_hotels": m.get_hotels_nearby_v1(), "central": m.get_central_node()}

    if data.get("type") and data.get("type").lower() != "lodging":
        resp['other_places'] = m.get_places_nearby_by_type()
    return resp


if __name__ == "__main__":
    app.run(debug=True)
