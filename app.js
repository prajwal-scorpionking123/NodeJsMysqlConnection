const mysql = require('mysql');
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
});
con.connect((err)=>{
    if(err) throw err;
    console.log("connected");
});
con.query('select * from student',(err,rows)=>{
    if(err)throw err;
    console.log('data recieved from database');
    console.log(rows);
    console.log(rows[0].rollno);
});