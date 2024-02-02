from flask import Flask,render_template,request,session,redirect,flash;
from neo4j import GraphDatabase,basic_auth;
from cryptography.fernet import Fernet;
from datetime import datetime;
from langchain.memory import ChatMessageHistory;
from langchain.chat_models import ChatOpenAI;
from langchain.chat_models import AzureChatOpenAI
from langchain.memory import ChatMessageHistory
from langchain_community.chat_message_histories.neo4j import Neo4jChatMessageHistory
from langchain.schema import HumanMessage,AIMessage
import os
import uuid
app = Flask(__name__)
app.secret_key = 'secret-key'
driver=GraphDatabase.driver(uri="bolt://172.176.235.251:7687",auth=basic_auth("neo4j","oPX^xVySa7u04AbR"))
session=driver.session()
myuuid = uuid.uuid4()
history = Neo4jChatMessageHistory(
    url="bolt://172.176.235.251:7687",
    username="neo4j",
    password="oPX^xVySa7u04AbR",
    session_id=str(myuuid),

    
)
@app.route('/',methods=["GET","POST"])
def index():
    if request.method == 'POST':
        login = request.form['username']
        typeuser=request.form['typeuser']
        mail   = request.form['mail']
        Mensaje = request.form['Mensaje']
        query1="""MATCH (n:Usuario) WHERE n.username ='"""+login+"""' and n.mail ='"""+mail+"""' RETURN n, ID(n) as id"""  
        results=session.run(query1)
        datos=[ dict(i) for i in results]
        if datos!=[]:
            query2="""CREATE(msg:Mensajes{userid:'"""+str(datos[0]['id'])+"""',username:'"""+datos[0]['n']['username']+"""',usermail:'"""+datos[0]['n']['mail']+"""',usertype:'"""+typeuser+"""',Mensaje:'"""+Mensaje+"""'})"""  
            results=session.run(query2)
            flash(f"Message sended successfully", "success")
        else:
            flash(f"You have to verify your login and your mail", "danger")
    return render_template('index.html')
@app.route('/Register',methods=["GET","POST"])
def signin():
    return render_template('register.html')
@app.route('/Log-in',methods=["GET","POST"])
def log_in():
    return render_template('login.html')
@app.route('/investors',methods=["GET","POST"])
def investors():
    return render_template('investors.html')
@app.route('/enterprise',methods=["GET","POST"])
def enterprise():
    return render_template('enterprise.html')
@app.route('/digitalAssets',methods=["GET","POST"])
def digitalAssets():
    return render_template('digitalAssets.html')
@app.errorhandler(400)
def handle_bad_request(e):
    return render_template('login.html'), 400
@app.route('/login',methods=["GET","POST"])
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
    return render_template('login.html',mail=mail,pswd=pswd)
@app.route('/profile',methods=["POST"])
def Verify():
    mail=request.form["mail"]
    pswd=request.form["pswd"]
    now = datetime.now()
    bot_time = now.strftime('%I:%M %p')
    query="""MATCH (n:Usuario) WHERE n.mail ='"""+mail+"""' RETURN n
    """  
    results=session.run(query)
    x=[ dict(i) for i in results]
    if x!=[]:
        second_key = x[0]['n']['key'].encode()
        Second_f = Fernet(second_key)
        decryptedData = Second_f.decrypt(x[0]['n']['pswd'].encode())
        if decryptedData.decode()==pswd:
            return render_template('profile.html',username=x[0]['n']['username'].capitalize(),time_bot_msg=bot_time,recived_user_msg=None,time_human_msg=None,ai_response=None)
        else:
            flash(f"You have to verify your password", "danger")
            return redirect("/login", code=302)
    else:
        flash(f"You have to verify your mail", "danger")
        return redirect("/login", code=302)
@app.route('/profile/sendmsg',methods=["GET","POST"])
def send_msg():
    recived_user_msg=request.form["user_msg"]
    user_name=request.form["username"]
    time_bot_msg=request.form["time_bot_msg"]
    time = datetime.now()
    human_time = time.strftime('%I:%M %p')
    deployment_name= 'gpt-35-turbo-16k'
    os.environ["AZURE_OPENAI_API_KEY"] = "606a9f9d9d7d45ef8b1c71cec6e576e7"
    os.environ["AZURE_OPENAI_ENDPOINT"] = "https://xavi9azureopenai.openai.azure.com/"
    model = AzureChatOpenAI(
        openai_api_version="2023-05-15",
        azure_deployment=deployment_name,
    )
    messageH = HumanMessage(content= recived_user_msg)
    response =model([messageH])
    assistant_response = response.content
    return render_template('profile.html',recived_user_msg=recived_user_msg,username=user_name,time_human_msg=human_time,time_bot_msg=time_bot_msg,ai_response=assistant_response)
app.run(debug=True)