from dotenv import load_dotenv
import os
from googlemaps import Client, geocoding
import json
import requests
import ast
from urllib.parse import quote_plus


class Maps:
    def __init__(self, data):
        load_dotenv()
        self.apikey = os.getenv("mapsAPIKEY")
        self.data = data
        self.centralnode = 0  # latlong
        self.places = data["places"]
        self.loc = data["type"]
        # self.places = ast.literal_eval(data["places"])
        self.client = Client(key=self.apikey)

    def geocode(self, debug=False):
        """
        returns the lat long for the given list of locations
        """
        loc_geocode_map = {}
        for i in self.places:
            gc = geocoding.geocode(self.client, address=i)
            loc_geocode_map[i] = gc[0]["geometry"]
        if debug:
            return json.dumps(loc_geocode_map, indent=2)
        return loc_geocode_map

    def gen_payload(self, debug=False):
        geocodes = self.geocode()
        payload = []
        for i in geocodes:
            bp = {"waypoint": {"location": {"latLng": {"latitude": 0, "longitude": 0}}}}
            lat = geocodes[i]["location"]["lat"]
            lng = geocodes[i]["location"]["lng"]
            bp["waypoint"]["location"]["latLng"]["latitude"] = lat
            bp["waypoint"]["location"]["latLng"]["longitude"] = lng
            payload.append(bp)
        if debug:
            return json.dumps(payload, indent=2)
        return payload

    def get_route_matrix(self, debug=False):
        endpoint = "https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix"
        p = self.gen_payload()
        payload = {"origins": p, "destinations": p}
        headers = {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": self.apikey,
            "X-Goog-FieldMask": "originIndex,destinationIndex,duration,distanceMeters,status,condition,travelAdvisory.transitFare",
        }
        resp = requests.post(endpoint, json=payload, headers=headers)
        route_mat = resp.text
        if debug:
            return json.dumps(route_mat, indent=2)
        return route_mat

    def get_map(self):
        origin = quote_plus(self.places[0])
        dest = quote_plus(self.places[-1])
        waypoints = quote_plus("|".join(self.places[1:-1]))
        url = f"https://www.google.com/maps/embed/v1/directions?key={self.apikey}&origin={origin}&destination={dest}&waypoints={waypoints}"
        return url

    def get_central_node(self):
        """
        finds the central node wrt all the locations passed
        """
        loc_coordinate_map = self.geocode()
        coordinates = [
            loc_coordinate_map[c]["location"] for c in loc_coordinate_map.keys()
        ]
        # print(loc_coordinate_map, coordinates, sep="\n")
        latlng = [0, 0]
        for c in coordinates:
            latlng[0] += c["lat"]
            latlng[1] += c["lng"]
        latlng[0] = latlng[0] / len(coordinates)
        latlng[1] = latlng[1] / len(coordinates)
        return latlng

    def get_hotels(self):
        """
        Finds hotels around the central node
        """
        central = self.get_central_node()
        rgc = geocoding.reverse_geocode(self.client, central)
        central_addr = rgc[0]["address_components"]
        street = quote_plus(central_addr[1]["long_name"])
        area = quote_plus(central_addr[3]["long_name"])
        url = f"https://www.google.com/maps/embed/v1/search?key={self.apikey}&q={self.loc}+in+{street}+{area}&center={central[0]},{central[1]}&zoom=14"
        return url
