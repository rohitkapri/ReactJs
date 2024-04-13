    const express = require('express');
    const app = express();
    const PORT = 3001;
    const mysql = require("mysql");
    const cors = require('cors');
    
    const {encrypt , decrypt } = require("./EncryptionHandler")

    app.use(cors());
    app.use(express.json());

    // creating a connection
    const db = mysql.createConnection({
        user: "root",
        host: "localhost",
        password: "root123",
        database: "passwordmanager" 
    })
    // db.query(`select * from passwords` , (err,result, fields)=>{
    //     if(err){
    //         return console.log(err);
    //     }
    //     return console.log("successful", result);
    // })

    app.post("/addpassword",(req,res)=>{
        const {password , title } = req.body;
        const hashedPassword = encrypt(password);

        db.query(`insert into passwords(password , title , iv) values(?,?,?)`,
        [hashedPassword.password, title , hashedPassword.iv], 
        (err, result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("Success");
        }
        })
        console.log(password,title);
    });

    app.get("/showpasswords", (req, res) => {
        db.query("SELECT * FROM passwords;", (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        });
      });

    app.post("/decryptpassword", (req, res) => {
        res.send(decrypt(req.body));
      });

      
    app.get("/",(req,res) =>{
        res.send("Hello Wold");
    });

    app.listen(PORT, ()=>{
        console.log('server is running');
    });