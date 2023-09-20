import os
import sqlite3

db_path = 'DB.db'

os.chdir(os.path.dirname(os.path.abspath(__file__)))

def create_table(db_path):
    # conectar a la base de datos, si no existe crea una nueva
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    # crear tabla con registros diarios
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS beach_water_info (
            date TEXT,
            name STRING,
            e-coli INT,
            enterococo INT,
            ph INT,
            chemical-1 INT,
            quality INT
        )
    ''')
    conn.commit()

    cursor.close()
    conn.close()


def update_table(df_csv):
    conn = sqlite3.connect(db_path)

    # añadir los datos nuevos a la tabla
    df_csv.to_sql('beach_water_info', conn, if_exists='append', index=False)

    conn.close()
