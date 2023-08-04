import mysql.connector
import cgi
connection = mysql.connector.connect(host="localhost",user="root",passwd="Dnms12345")
cursor = connection.cursor()
cursor.execute("create database if not exists form1")
cursor.execute("use form1")

def create_table ():
    cursor.execute("create table if not exists details(name varchar(60),email varchar(100) primary key,pswd varchar(100),gen varchar(7),date int,month int,year int)")
    connection.commit()

def insert_data(form):
    name=form.getvalue('name')
    email=form.getvalue('email')
    pswd =form.getvalue('pswd')
    gen= form.getvalue('gender')
    date= int(form.getvalue('date'))
    month= int(form.getvalue('month'))
    year= int(form.getvalue('year'))
    insert_query = '''insert into form1(name,email,pswd,gen,date,month,year)
                      values(%s, %s, %s, %s, %s, %s, %s)'''
    data = (name,email,pswd,gen,date,month,year)
    cursor.execute(insert_query,data)
    connection.commit()

if __name__ == "__main__":
    create_table()
    form = cgi.FieldStorage()
    insert_data(form)
    connection.close()
    cursor.close()