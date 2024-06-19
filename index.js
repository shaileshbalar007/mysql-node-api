const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mydb"
});

const PORT = 8810;

// to send from html body
app.use(express.json())
app.use(cors())

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
app.get("/",(req,res)=>{
    res.json("Hello World")
})

app.get("/getstudents",(req,res)=>{
    const q="SELECT * FROM tbl_students"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(process.env.PORT || PORT,()=>{
    console.log("Connect to backend.")
})