import React, {useState} from 'react'
import './Login.css'

export function LoginForm({Login, error}) {
    const [userDetails, setUserDetails] = useState({name:"", password:""});

    const handleLogin = e => {
        e.preventDefault();

        Login(userDetails);
    }
  return (
    <form className='allloginForm' onSubmit={handleLogin}>
        <div className='loginForm'> 
            <h2>Login</h2>
            {(error !== "") ? (<div className='err'>{error}</div>) : ""}
            <div className='formgroup'>
                <label className='loginformlbl'>Name:</label>
                <input className="logininput" type="text" id="name" name="name" placeholder="name" onChange={e => setUserDetails({...userDetails, name:e.target.value})} value={userDetails.name}/>
            </div>
            <div className='formgroup'>
                <label className='loginformlbl'>Password:</label>
                <input className="logininput" type="password" id="password" name="password" placeholder="password" onChange={e => setUserDetails({...userDetails, password:e.target.value})} value={userDetails.password}/>
            </div>
            <input type="submit" value="Login" className='loginbtn'/>
        </div>
    </form>
  )
}
