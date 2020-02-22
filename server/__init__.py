from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')


@app.route('/contacts')    
def contacts():
    return render_template('contacts.html')


@app.route('/todolist')    
def todolist():
    return render_template('to-do-list.html')

@app.route('/spa')    
def spa():
    return render_template('spa.html')