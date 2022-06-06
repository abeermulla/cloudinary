import React, {useState} from 'react'
import { LoginForm } from './LoginForm';
import './Login.css'

export function LoginCheck() {
    const User = {
        name: "ronen",
        password: "ronen123"
    }

    const [user, setUser] = useState({name: "", password:""});
    const [error, setError]= useState("");

    const Login = userDetails => {
        console.log(userDetails);

        if(userDetails.name === User.name && userDetails.password === User.password){
            console.log("successfully logged in");
            setUser({
                name: userDetails.name,
                password: userDetails.password
            });
        }
        else{
            console.log("details do not match");
            setError("details do not match")
        }    
    }

    const Logout = () => {
        setUser({name: "", password:""});
        console.log("Logout");
    }

  return (
    <div>
      {(user.password !== "") ? (
        <div className='errandlogout-container'>
        <h2 className='welcomesentence'>Welcome <span>{user.name}</span></h2>
        <button className="logoutbtn" onClick={Logout}>LOGOUT</button>
        </div>
      )
    :(
        <LoginForm Login={Login} error={error}/>
    )} 
    </div>
  )
}

