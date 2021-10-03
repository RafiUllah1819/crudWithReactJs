import React ,{useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'

const Register = ({history})  =>{

    const [name, setName] = useState()
    const a = useHistory()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
   

    const signUp = () =>{
        const data = JSON.parse(localStorage.getItem('login')) || [];
        data.push({name, username, password})
        localStorage.setItem('login' , JSON.stringify(data))
        localStorage.setItem('token', username)
        a.push(('/home'))
    }

    

return(
    <div className="logo">
        <div className="container">
        <div className="form">
                <h1>Register</h1>
            <div className="form-group mb-3">
                <input type="text" 
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <input type="text" 
                placeholder="Username"
                className="form-control"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <input type="password" 
                placeholder="Password"
                className="form-control"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <button className="btn btn-success"
           onClick={signUp}
            style={{marginRight:"20px"}}>Register </button>
             <NavLink to="/login" className="reg" 
             >Login</NavLink><br/>

            </div>
        </div>
    </div>
)
}
export default Register