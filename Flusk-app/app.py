import os

import pandas as pd
import numpy as np


from flask import Flask, jsonify, request, render_template
import pymysql
pymysql.install_as_MySQLdb()

#################################################
# DataBase Setup
#################################################

db = pymysql.connect("localhost", "root", "yourpassword", "baseball_data")

#################################################
# Flask Setup
#################################################

app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/bwar_bat")
def bwar_bat():
    """Return the homepage."""
    return render_template("bwar_bat.html")


#bwar_bat_table
@app.route("/bwar_bat_table")
def bwar_bat_table():
    cursor = db.cursor()
    sql = "SELECT * FROM bwar_bat"
    cursor.execute(sql)
    results_bwar_bat_table = cursor.fetchall()
    return render_template('bwar_bat_table.html', results_bwar_bat_table=results_bwar_bat_table)

#schedule_and_record_table
@app.route("/schedule_and_record_table")
def schedule_and_record_table():
    cursor = db.cursor()
    sql = "SELECT * FROM schedule_and_record"
    cursor.execute(sql)
    results_schedule_and_record_table = cursor.fetchall()
    return render_template('schedule_and_record_table.html', results_schedule_and_record_table=results_schedule_and_record_table)

#team_batting_table
@app.route("/team_batting_table")
def team_batting_table():
    cursor = db.cursor()
    sql = "SELECT * FROM team_batting"
    cursor.execute(sql)
    results_team_batting_table = cursor.fetchall()
    return render_template('team_batting_table.html', results_team_batting_table=results_team_batting_table)

#Convert bwar-bat data in to Json
@app.route("/samples-bwar-bat/<sample>")
def samplesbwarbat(sample):
    """Return `salarys`, `name_commons`,and `year_IDs`."""
    df = pd.read_sql_query('SELECT * FROM bwar_bat WHERE year_ID=' + sample + ' ORDER BY salary DESC limit 10;', db)

    # Filter the data based on the sample number and
    data = {
        "salarys": df.salary.values.tolist(),
        "year_IDs": df.year_ID.values.tolist(),
        "name_commons": df.name_common.tolist(),
        "Player_IDs": df.player_ID.tolist(),
        "PAs": df.PA.tolist(),
    }
    df_list = df.salary.values.tolist()
    return jsonify(data)

# Convert team-batting data in to Json
@app.route("/samples-team-batting")
def samplesteambatting():
    """Return team_batting data info in to Json."""
    df = pd.read_sql_query('SELECT * FROM team_batting', db)
    df_list = df.values.tolist()
    return jsonify(df_list)

# Convert schedule-and-record data in to Json
@app.route("/samples-schedule-and-record")
def samplesscheduleandrecord():
    """Return team_batting data info in to Json."""
    df = pd.read_sql_query('SELECT * FROM schedule_and_record', db)
    df_list = df.values.tolist()
    return jsonify(df_list)

#return years for bwar-bat data
@app.route("/years-bwar-bat")
def namesbwarbat():
    """Return a list of sample namesbwarbat."""

    # Use Pandas to perform the sql query
    df_year = pd.read_sql_query('SELECT DISTINCT(year_ID) FROM bwar_bat ORDER BY year_ID DESC;', db)

    # Return a list of the column namesbwarbat (sample namesbwarbat)
    return jsonify(list(df_year.year_ID))


if __name__ == "__main__":
    app.run()

