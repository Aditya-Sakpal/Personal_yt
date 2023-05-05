import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import styles from "./login.css";
import { useContext,useEffect } from 'react';
import { Context } from '../context/contextApi';
// import firebase from 'firebase/app';
import { dataRef } from '../utils/Firebases';


const Login = (props) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [interests, setInterests] = useState('');
  const history = useNavigate();

  const [logData,setLogData]=useState([]);

  const {setData}=useContext(Context);


  const [name1, setName1] = useState('');
  const [password1, setPassword1] = useState('');
  const [interests1, setInterests1] = useState('');

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/login', {
      name,
      password,
      interests,
    })
      .then(response => {
        // console.log(response.data);
        setData(response.data.contents);
        // props.onSubmit(response.data);
        if (name !== "" && password !== "") {
          // const data={
          //   pass:password,
          //   ins:interests
          // };
          // dataRef.ref().child("users").child(name).push(data)
          
          history("/feed");
        } else {
          alert("Invalid username or password.");
        }
      })
      .catch(error => {
        console.log(error);
      });

      
      }

  const HandleLoginSubmit=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:5000/login1', {
      name1,
      password1
    }).then(response => {
      if(response.data.auth==="pass"){
            setData(response.data.contents);
            history("/feed");

      }else{
        alert("Enter Valid Credentials");
      }
     
    })
    .catch(error => {
      console.log(error);
    });
  
  } 
  // console.log(logData);

  return (
    <div className="nava">
    <div className="container">
    <input type="checkbox" id="flip"/>
    <div className="cover">
      <div className="front">
        {/* <img src="images/frontImg.jpg" alt=""> */}
        <div className="text">
          <span className="text-1">A project created by  <br/>a newbie</span>
          <span className="text-2"><a href='https://www.linkedin.com/in/aditya-sakpal-02270325b/'>Connect with me</a></span>
        </div>
      </div>
      <div className="back">
        {/* <!--<img className="backImg" src="images/backImg.jpg" alt="">--> */}
        <div className="text">
          <span className="text-1">Complete miles of journey <br/> with one step</span>
          <span className="text-2">Let's get started</span>
        </div>
      </div>
    </div>
    <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
          <form action="#" onSubmit={HandleLoginSubmit}>
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your name" value={name1} onChange={(event)=>setName1(event.target.value)}   required/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password"  value={password1} onChange={(event)=>setPassword1(event.target.value)}  required/>
              </div>
              <div className="text"><a href="#">Forgot password?</a></div>
              <div className="button input-box">
                <input type="submit" value="Sumbit"/>
              </div>
              <div className="text sign-up-text">Don't have an account? <label for="flip">Signup now</label></div>
            </div>
        </form>
      </div>
        <div className="signup-form">
          <div className="title">Signup</div>
        <form action="#" method='POST' onSubmit={handleSignUpSubmit}>
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Enter your name" value={name} onChange={(event)=>setName(event.target.value)}  required/>
              </div>
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your interests" value={interests} onChange={(event) => setInterests(event.target.value)} required/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" value={password} onChange={(event)=>setPassword(event.target.value)}  required/>
              </div>
              <div className="button input-box">
                <input type="submit" value="Sumbit" />
              </div>
              <div className="text sign-up-text">Already have an account? <label for="flip">Login now</label></div>
            </div>
      </form>
    </div>
    </div>
    </div>
  </div>
  </div>

     );
}

export default Login;
