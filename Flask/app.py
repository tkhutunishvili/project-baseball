import os

import pandas as pd
import numpy as np
import json


from flask import Flask, jsonify, request, render_template
import pymysql
pymysql.install_as_MySQLdb()

#################################################
# DataBase Setup
#################################################

db = pymysql.connect("localhost", "root", "password", "baseball_data")

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

@app.route("/team_batting")
def team_batting():
    """Return the homepage."""
    return render_template("team_batting.html")

@app.route("/pitching_visual")
def pitching_visual():
    """Return the homepage."""
    return render_template("pitching_info.html")

@app.route("/map")
def map_visual():
    """Return the homepage."""
    return render_template("map_visual.html")

# Convert pitching-info data in to Json
@app.route("/pitching_info")
def pitching_info():
    """Returns information about starting pitchers"""
    #query from database
    db = pymysql.connect("localhost", "root", "password", "baseball_data")
    df = pd.read_sql_query('SELECT * from pitching_info;', db)

    data = {
        "Team": df.Team.values.tolist(),
        "Wins_2016": df.Wins_2016.tolist(),
        "IP_2016": df.IP_2016.values.tolist(),
        "Wins_2017": df.Wins_2017.values.tolist(),
        "IP_2017": df.IP_2017.values.tolist(),
        "Wins_2018": df.Wins_2018.values.tolist(),
        "IP_2018": df.IP_2018.tolist(),

    }
    #jsonify data  - works
    return jsonify(data)

@app.route("/win_loss_results")
def win_loss_results():
    """Return the homepage."""
    return render_template("win_loss_results.html")

#Convert bwar-bat data in to Json
@app.route("/samples-bwar-bat/<sample>")
def samplesbwarbat(sample):
    """Return `salarys`, `name_commons`,and `year_IDs`."""
    db = pymysql.connect("localhost", "root", "password", "baseball_data")
    df = pd.read_sql_query('SELECT * FROM bwar_bat WHERE year_ID=' + sample + ' ORDER BY salary DESC limit 10;', db)

    # Filter the data based on the sample number and
    data = {
        "salarys": df.salary.values.tolist(),
        "year_IDs": df.year_ID.values.tolist(),
        "name_commons": df.name_common.tolist(),
        "Player_IDs": df.player_ID.tolist(),
        "PAs": df.PA.tolist(),
        "Gs": df.G.tolist(),
    }
    df_list = df.salary.values.tolist()
    return jsonify(data)

#Convert Win-loss-result data in to Json
@app.route("/samples-win_loss_results/<sample>")
def sampleswinloss(sample):
    db = pymysql.connect("localhost", "root", "password", "baseball_data")
    df = pd.read_sql_query('SELECT * FROM win_loss_results WHERE year=' + sample, db)

    # Filter the data based on the sample number and
    data = {
        "abbrs": df.abbr.values.tolist(),
        "team_names": df.team_name.values.tolist(),
        "home_bases": df.home_base.tolist(),
        "wins": df.win.tolist(),
        "losss": df.loss.tolist(),
        "lats": df.lat.tolist(),
        "lons": df.lon.tolist(),
    }
    return jsonify(data)

# Convert team-batting data in to Json
@app.route("/samples-team-batting/<sample>")
def samplesteambatting(sample):
    """Return team_batting data info in to Json."""
    db = pymysql.connect("localhost", "root", "password", "baseball_data")
    df = pd.read_sql_query('SELECT * FROM team_batting where Team="' + sample + '"', db)
    data = {
        "Teams": df.Team.values.tolist(),
        "Seasons": df.Season.values.tolist(),
        "SBs": df.SB.values.tolist(),
         }
    return jsonify(data)

# Convert pitching-info data in to Json
@app.route("/samples-pitching-info")
def samplespitchinginfo():
    """Return pitching_info data info in to Json."""
    db = pymysql.connect("localhost", "root", "password", "baseball_data")
    df = pd.read_sql_query('SELECT * FROM pitching_info', db)
    df_list = df.values.tolist()
    return jsonify(df_list)

# Convert win-loss data in to Json
@app.route("/samples-win-loss-results-new")
def samplesscheduleandrecord():
    """Return team_batting data info in to Json."""
    df = pd.read_sql_query('SELECT * FROM win_loss_results', db)
    #loop for creating key value and convering in to Json
    result = []
    cols = df.columns.tolist()
    for row in df.values.tolist():
        rowd = dict()
        for iv,v in enumerate(row):
            rowd[cols[iv]] = v
        result.append(rowd)

    return json.dumps(result)

#return years for bwar-bat data
@app.route("/years-bwar-bat")
def namesbwarbat():
    """Return a list of sample namesbwarbat."""
    db = pymysql.connect("localhost", "root", "password", "baseball_data")
    # Use Pandas to perform the sql query
    df_year = pd.read_sql_query('SELECT DISTINCT(year_ID) FROM bwar_bat ORDER BY year_ID DESC;', db)

    # Return a list of the column year_ID (sample year)
    return jsonify(list(df_year.year_ID))

#return years for win_loss_results data
@app.route("/years-win_loss_results")
def yearwinloss():
    """Return a list of sample namesbwarbat."""
    db = pymysql.connect("localhost", "root", "password", "baseball_data")
    # Use Pandas to perform the sql query
    df_year = pd.read_sql_query('SELECT DISTINCT(year) FROM win_loss_results ORDER BY year DESC;', db)

    # Return a list of the column year (sample year)
    return jsonify(list(df_year.year))

# Convert team-batting data in to Json
@app.route("/team-team_batting")
def teamteambatting():
    """Return a list of sample teamteambatting."""
    db = pymysql.connect("localhost", "root", "password", "baseball_data")
    # Use Pandas to perform the sql query
    df_team = pd.read_sql_query('SELECT DISTINCT(Team) FROM team_batting;', db)

    # Return a list of the column teamteambatting (sample teamteambatting)
    return jsonify(list(df_team.Team))

if __name__ == "__main__":
    app.run()

