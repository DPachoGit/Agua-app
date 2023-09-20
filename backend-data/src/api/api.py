from flask import Flask, jsonify, request, Response
import os
import sqlite3

os.chdir(os.path.dirname(os.path.abspath(__file__)))
app = Flask(__name__)
# app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return "<h1>My API</h1><p>This site is an API for costal water quality info.</p>"

# 1.Ruta para obtener los datos de todas las playas
@app.route('/v0/get_todays_info', methods=['GET'])
def get_todays_info():
    conn = sqlite3.connect('../db/DB.db')
    crsr = conn.cursor()

    crsr.close()
    conn.close()
    info = {}
#   {
#       "beaches": [
#       {
#         "name": "Playa de la Malagueta",
#         "info": {
#             "e-coli": 20,
#             "enterococcus": 10,
#             "ph": 1,
#             "chemical-1": 1,
#             "quality": 1
#         }
#       },
#       {
#           'name':
#       }
#     ]
#   }
    return info

app.run(host='0.0.0.0')