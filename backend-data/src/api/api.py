from flask import Flask, request, Response
import os
import sqlite3
import datetime

os.chdir(os.path.dirname(os.path.abspath(__file__)))
app = Flask(__name__)


@app.route('/', methods=['GET'])
def home():
    return "<h1>My API</h1><p>This site is an API for costal water quality info.</p>"

# 1.ruta para obtener los datos de hoy de todas las playas
@app.route('/get_todays_info', methods=['GET'])
def get_todays_info():

    # coger datos de hoy de la DB
    conn = sqlite3.connect('../db/DB.db')
    crsr = conn.cursor()

    date_today = datetime.date.today().strftime("%d/%m/%Y")
    sql = '''
        SELECT * FROM beach_water_info WHERE date = ?
    '''
    crsr.execute(sql, (date_today,))
    ans = crsr.fetchall()

    crsr.close()
    conn.close()

    # formatear los datos para 
    res = {'date': date_today}
    beaches = []

    for row in ans:
        date, name, e_coli, enterococcus, ph, ammonium, mercury, turbidity, quality = row
        beaches.append({
            'name': name,
            'info':{
                'e-coli': e_coli,
                'enterococcus': enterococcus,
                'ph': ph,
                'ammonium': ammonium,
                'mercury':mercury,
                'turbidity': turbidity,
                'quality': quality
            }
        })
    res['beaches'] = beaches
    return res

app.run(host='0.0.0.0')