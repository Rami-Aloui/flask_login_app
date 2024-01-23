from flask import Flask,render_template,request,session,redirect,flash;
from neo4j import GraphDatabase,basic_auth;
from cryptography.fernet import Fernet;
from datetime import datetime;
app = Flask(__name__)
app.secret_key = 'secret-key'
driver=GraphDatabase.driver(uri="bolt://172.176.235.251:7687",auth=basic_auth("neo4j","oPX^xVySa7u04AbR"))
session=driver.session()
@app.route('/',methods=["GET","POST"])
def index():
    return render_template('index.html')
@app.errorhandler(400)
def handle_bad_request(e):
    return render_template('sign-up.html'), 400
@app.route('/registered',methods=["GET","POST"])
def register():
    login=request.form["login"]
    mail=request.form["mail"]
    pswd=request.form["pswd"]
    key = Fernet.generate_key()
    f = Fernet(key)
    plainText = pswd.encode()
    encryptedData = f.encrypt(plainText)
    crypt_string = encryptedData.decode("utf-8")
    key_string =   key.decode("utf-8")
    query="""CREATE("""+login+""":Usuario{username:'"""+login+"""',mail:'"""+mail+"""',pswd:'"""+crypt_string+"""',key:'"""+key_string+"""'})
    """  
    results=session.run(query)
    flash(f"User registered successfully", "success")
    return render_template('sign-up.html',mail=mail,pswd=pswd)
@app.route('/Login',methods=["POST"])
def Verify():
    mail=request.form["mail"]
    pswd=request.form["pswd"]
    now = datetime.now()
    bot_time = now.strftime('%I:%M %p')+",Today"
    query="""MATCH (n:Usuario) WHERE n.mail ='"""+mail+"""' RETURN n
    """  
    results=session.run(query)
    x=[ dict(i) for i in results]
    if x!=[]:
        second_key = x[0]['n']['key'].encode()
        Second_f = Fernet(second_key)
        decryptedData = Second_f.decrypt(x[0]['n']['pswd'].encode())
        if decryptedData.decode()==pswd:
            return render_template('Login.html',username=x[0]['n']['username'].capitalize(),time_bot_msg=bot_time,recived_user_msg=None)
        else:
            flash(f"You have to verify your password", "danger")
            return redirect("/registered", code=302)
    else:
        flash(f"You have to verify your mail", "danger")
        return redirect("/registered", code=302)
@app.route('/Login/sendmsg',methods=["GET","POST"])
def send_msg():
    recived_user_msg=request.form["user_msg"]
    user_name=request.form["username"]
    time_bot_msg=request.form["time_bot_msg"]
    time = datetime.now()
    human_time = time.strftime('%I:%M %p')
    return render_template('Login.html',recived_user_msg=recived_user_msg,username=user_name,time_human_msg=human_time,time_bot_msg=time_bot_msg)
app.run(debug=True)