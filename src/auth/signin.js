import React ,{useState} from 'react'
import { NavLink , useHistory } from 'react-router-dom';

const Signin = (auth)  =>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory()

    const login = () =>{
       const data = JSON.parse(localStorage.getItem('login')) || [];
       const checkValue = data.findIndex((user)=>
           user.username===username && user.password===password
       )
       if(checkValue>=0){
          localStorage.setItem('token' , username);
          history.push('/home')
          auth(true)

       }else{
                alert('username or password is incorrect')
       }
    }

    return(
        <div className="logo">
            <div className="container">
             <div className="form">
                <h1>SIGN IN</h1>
            <div className="form-group mb-3">
                <input type="text" 
                placeholder="Username"
                className="form-control"
                value = {username}
                onChange ={(e)=>setUsername(e.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <input type="password" 
                placeholder="Password"
                className="form-control"
                value = {password}
                onChange ={(e)=>setPassword(e.target.value)}
                />
            </div>
            <button className="btn btn-success"
            onClick={login}
            style={{marginRight:"20px"}}>Signin </button>
            <h4>OR</h4>
            <h5>Don't have account?</h5>
           <div className="regis">
                <NavLink to="/register" className="reg">REGISTER</NavLink>
           </div>
            
            </div>
        </div>
        </div>
    )
    }
    export default Signin