from flask import Flask,render_template,request,session,redirect
import mysql.connector
import numpy as np
import pickle
from datetime import datetime
import pickle

app=Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))
app.secret_key="abz"
@app.route('/')
def student():
    return render_template('index.html')

@app.route('/register')
def register():
    return render_template("register.html")

@app.route('/register',methods=['POST','GET'])
def reg_submit():
    mydb=mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="register"
    )
    mycursor=mydb.cursor(buffered=True)
    """The reason is that without a buffered cursor, the results are "lazily" loaded, meaning that "fetchone" actually only fetches one row from the full result set of the query. When you will use the same cursor again, it will complain that you still have n-1 results (where n is the result set amount) waiting to be fetched. However, when you use a buffered cursor the connector fetches ALL rows behind the scenes and you just take one from the connector so the mysql db won't complain."""
    if request.method=='POST':
        signup=request.form
        username=signup['user']
        email=signup['mail']
        mobile=signup['mob']
        password=signup['pass']
        rpassword=signup['rpass']

        mycursor.execute("select count(*) from reg where email='"+email+"'")
        rows = mycursor.fetchall()
        print(rows)
        for r in rows:
            if(r[0]==0):
                print(username, email, mobile, password, rpassword)
                mycursor.execute("insert into reg(user,email,mob,pass,rpass)values(%s,%s,%s,%s,%s)",(username,email,mobile,password,rpassword))
                mydb.commit()
                mycursor.close()
                registered="Email registered successfully"
                return render_template('register.html',msg=registered)
            else:
                un_registered="Email already in database try different email"
                return render_template('register.html', msg=un_registered)

@app.route('/login')
def login():
    return render_template("login.html")


@app.route('/login',methods=['POST','GET'])
def log_submit():
    mydb=mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="register"
    )
    mycursor=mydb.cursor()
    if request.method=='POST':
        signup=request.form
        username=signup['user']
        password=signup['pass']
        session['username']=request.form['user']
        if 'username' in session:
            s=session['username']
        mycursor.execute("select * from reg where user='"+username+"' and pass='"+password+"'")
        r=mycursor.fetchall()
        count=mycursor.rowcount
        if count==1:
            return render_template("home.html",name=s)
        elif count>1:
            return "more then one user"
        else:
            return render_template("login.html")

    mydb.commit()
    mycursor.close()

@app.route('/logout')
def logout():
    session.pop('username',None)
    return render_template("index.html")

@app.route('/home')
def home():
    title='Heart Diagnoser'
    return render_template("home.html",title=title)

@app.route('/dataset')
def dataset():
    title='Heart Diagnoser'
    return render_template("dataset.html",title=title)

@app.route("/aboutus")
def aboutus():
    title='Heart Diagnoser'
    return render_template("aboutus.html",title=title)

@app.route('/predict',methods=['POST'])
def predict():

    fullname=(request.form['fullname'])
    age = float(request.form['age'])
    sex = float(request.form['sex'])
    cp = float(request.form['cp'])
    trestbps = float(request.form['trestbps'])
    chol = float(request.form['chol'])
    fbs = float(request.form['fbs'])
    restecg = float(request.form['restecg'])
    thalach = float(request.form['thalach'])
    exang = float(request.form['exang'])
    oldpeak = float(request.form['oldpeak'])
    slope = float(request.form['slope'])
    ca = float(request.form['ca'])
    thal = float(request.form['thal'])
    features=[age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal]
    final_features = [np.array(features)]
    prediction = model.predict(final_features)
    prediction_proba = model.predict_proba(final_features)
    output = prediction[0]
    no = prediction_proba[0, 0]
    yes = prediction_proba[0, 1]
    neg = f"Negative chances of having diabetes is {'{0:.0%}'.format(no)}"
    pos = f"Positive chances of having diabetes is {'{0:.0%}'.format(yes)}"

    return render_template('home.html', prediction=output, negative=neg, positive=pos,features=features,
    fullname=fullname,age=age,sex=sex,cp=cp,trestbps=trestbps,chol=chol,fbs=fbs,restecg=restecg,
                           thalach=thalach,exang=exang,oldpeak=oldpeak,slope=slope,ca=ca,thal=thal)


if __name__ == "__main__":
     app.run(debug=True)