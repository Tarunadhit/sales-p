from bson import _name_value_to_bson
from flask import Flask, jsonify,render_template,request,url_for,redirect
from flask_cors import CORS
import pandas as pd
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred=credentials.Certificate("key.json")
firebase_admin.initialize_app(cred,{
    "databaseURL": "https://salespredictionreport-default-rtdb.asia-southeast1.firebasedatabase.app/"
})

app=Flask(_name_value_to_bson)
CORS(app)

authenticationCheck=False
signUpCheck=False

def login(name,passw):
    dataBase=db.reference("main") 
    Value=dataBase.get()
    if name not in Value:
        return False
    Value=Value[name] 
    
    if Value!=None:
        if passw==Value:
            return True
        else:
            return False
    else:
        return None

def check(name,passw,cpassw):
    dataBase=db.reference("main")
    Value=dataBase.get()
    if name in Value:
        return jsonify({"status":"exists"})
    else:
        if passw!=cpassw:
            return jsonify({"status":"mismatch"})
        else:
            dataBase.update({name:passw})
            return jsonify({"status":"success"})

def predict(file,time_unit,forecast_duration):
    data = pd.read_csv(file, parse_dates=['date'])
    if time_unit == 'Daily':
        freq = 'D'
    elif time_unit == 'Weekly':
        freq = 'W'
    elif time_unit == 'Monthly':
        freq = 'M'
    elif time_unit == 'Yearly':
        freq = 'Y'

    resampled_data = data.set_index('date').resample(freq).sum().reset_index()

    # Fit the ARIMA model
    model = ARIMA(resampled_data['sales'], order=(1, 1, 1))
    results = model.fit()

    # Make forecasts
    if time_unit == 'Daily':
        future_dates = pd.date_range(start=resampled_data['date'].max(), periods=forecast_duration, freq='D')
    elif time_unit == 'Weekly':
        future_dates = pd.date_range(start=resampled_data['date'].max(), periods=forecast_duration, freq='W')
    elif time_unit == 'Monthly':
        future_dates = pd.date_range(start=resampled_data['date'].max(), periods=forecast_duration, freq='M')
    elif time_unit == 'Yearly':
        future_dates = pd.date_range(start=resampled_data['date'].max(), periods=forecast_duration, freq='Y')

    forecast = results.forecast(forecast_duration)
    path1="C:/Users/laksh/OneDrive/Desktop/angular/webapp/src/assets/image1.jpg"
    path2="C:/Users/laksh/OneDrive/Desktop/angular/webapp/src/assets/image2.jpg"
    # Plot the results

    plt.plot(resampled_data['date'], resampled_data['sales'], label='Actual')
    plt.savefig(path1)
    plt.plot(future_dates, forecast, label='Forecast')
    plt.savefig(path2)
    plt.close()

@app.route('/signin',methods=["GET","POST"])
def signin():
    print("Entered signin")
    data=request.get_json()
    username=data["username"]
    password=data["password"]
    
    var=login(username,password)
    print(var)
    if(var==True):
        return jsonify({"result":"success"})
    else:
        return jsonify({"result":"failure"})

@app.route('/flask',methods=["GET","POST"])
def fl():
       
    print("Entered flask")
    file=request.files["file"]
    filename = file.filename  
    selection=request.form["selection"]
    duration=request.form["duration"]
    print("File recieved",duration,selection)
    predict(file,selection,int(duration))
    print("File saved")
    return "File recieved successfully"

@app.route('/signup',methods=["GET","POST"])
def signup():
    print("Entered signup")
    data=request.get_json()
    username=data["username"]
    password1=data["password1"]
    password2=data["password2"]
    print(username,password1,password2)
    return check(username,password1,password2)
app.run()