from flask import Flask, request, Response
import os
import sqlite3
import datetime

os.chdir(os.path.dirname(os.path.abspath(__file__)))
app = Flask(__name__)

message_ok = 'Sin riesgo'
message_caution = 'Valor muy alto, baño no recomendado'
message_danger_list = {
    'e-coli': 'Peligro de intoxicación gastrointestinal por ingesta o contacto en heridas o cortes en la piel.',
    'enterococcus': 'Peligro de infección por ingesta o contacto en heridas o cortes en la piel.',
    'ph': 'Acidez/Alcalinidad elevada del agua indicador de posible contaminación.',
    'ammonium': 'Peligro de proliferación de organismos patógenos.',
    'mercury': 'Peligro de intoxicación por compuestos derivados del mercurio.',
    'turbidity': 'Peligro por partículas posiblemente contaminantes en suspensión.'
}
def get_messages_dict(e_coli, enterococcus, ph, ammonium, mercury, turbidity):
    msg = {}
    if e_coli >= 235:
        msg['e-coli'] = message_danger_list['e-coli']
    elif e_coli >= 170:
        msg['e-coli'] = message_caution
    else:
        msg['e-coli'] = message_ok
    if enterococcus >= 35:
        msg['enterococcus'] = message_danger_list['enterococcus']
    elif enterococcus >= 20:
        msg['enterococcus'] = message_caution
    else:
        msg['enterococcus'] = message_ok
    if ph >= 9 or ph <= 6:
        if ph >= 9:
            msg['ph'] = 'Alcalinidad elevada del agua indicador de posible contaminación.'
        else:
            msg['ph'] = 'Acidez elevada del agua indicador de posible contaminación.'
    elif ph >= 8.5 or ph <= 6.5:
        if ph >= 8.5:
            msg['ph'] = message_caution
        else:
            msg['ph'] = 'Valor muy bajo, baño no recomendado'
    else:
        msg['ph'] = message_ok
    if ammonium >= 1:
        msg['ammonium'] = message_danger_list['ammonium']
    elif ammonium >= 0.8:
        msg['ammonium'] = message_caution
    else:
        msg['ammonium'] = message_ok
    if mercury >= 1:
        msg['mercury'] = message_danger_list['mercury']
    elif mercury >= 0.8:
        msg['mercury'] = message_caution
    else:
        msg['mercury'] = message_ok
    if turbidity >= 5:
        msg['turbidity'] = message_danger_list['turbidity']
    elif turbidity >= 4.5:
        msg['turbidity'] = message_caution
    else:
        msg['turbidity'] = message_ok
    return msg

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
            },
            'messages': get_messages_dict(e_coli, enterococcus, ph, ammonium, mercury, turbidity)
        })
    res['beaches'] = beaches
    return res

app.run(host='0.0.0.0')