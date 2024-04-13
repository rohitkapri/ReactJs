import { useState , useEffect } from 'react';
import React from 'react';
import './App.css';
import Axios from "axios";
import axios from 'axios';


function App() {
  const [Password , setPassword] = useState('');
  const [Title , setTitle] = useState('');
  const [passwordlist, setPasswordlist] = useState([]);

  const addPassword = ()=>{
    Axios.post("http://localhost:3001/addpassword",{
      password: Password,
      title: Title
    });
    console.log(Password , Title)
  };

  const decryptPassword = (encryption) => {
    Axios.post("http://localhost:3001/decryptpassword", {
      password: encryption.password,
      iv: encryption.iv,
    }).then((response) => {
      setPasswordlist(
        passwordlist.map((val) => {
          return val.id == encryption.id
            ? {
                id: val.id,
                password: val.password,
                title: response.data,
                iv: val.iv,
              }
            : val;
        })
      );
    });
  };

  useEffect(()=>{
    Axios.get("http://localhost:3001/showpasswords").then((response)=>setPasswordlist(response.data))
  },[]);

  return (
    <>
    <div className="App">
      <h3>You can save your password here</h3>
     <div className="AddingPassword">
      <input type="text" 
      placeholder="Password" 
      onChange={(event)=>{
        setPassword(event.target.value)
        }
       }/>
      <input type="text" placeholder="Ex. Facebook"
      onChange={(event)=>{
        setTitle(event.target.value)
        }
        }/>
      <button onClick={addPassword}>Add Password</button>
     </div>
     <div className="Passwords">
      {
        passwordlist.map((val,index)=>{
          return ( 
            <div className="password" key={index} onClick={()=>{decryptPassword({password: val.password, iv: val.iv , id: val.id})}}><h3 key={index}>{val.title}</h3></div>
          )
        })
      }
     </div>
    </div>
    </>
  );
}

export default App;
