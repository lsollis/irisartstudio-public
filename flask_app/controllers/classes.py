from flask_app import app
from flask import render_template, redirect,request,session,flash

@app.route('/class/<int:id>')
def art_class(id):
    return render_template("class.html")