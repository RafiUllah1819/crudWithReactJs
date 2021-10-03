
import React,{useState , useEffect} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Signin from './auth/signin';
import Register  from './auth/register';
import Home from './auth/home';
import TableData from './auth/tableData';


function App() {

  const [auth , setAuth] = useState(false);
//  const  [peron,setPerson] = useState({name:'', address:'', contact:'', designation:''})
  const [name, setName] = useState()
  const [address, setAddress] = useState()
  const [contact, setContact] = useState()
  const [designation, setDesignation] = useState()
  const [tablev, setTablev] = useState([])
  const [index, setIndex] = useState(null)

  useEffect(()=>{
  const token = localStorage.getItem('token') ? true :false;
  setAuth(token)
   },[])
  return (
    <div className="App">
    <Switch>
    <Route path="/signin" render={(props)=><Signin auth={auth}  {...props}/>} />
    <Route path="/register" render={(props)=><Register  {...props}/>} />
    <Route path="/home" render={(props)=><Home index={index} setIndex={setIndex} name={name} setName={setName} address={address}  setAddress={setAddress} contact={contact} setContact={setContact} designation={designation} setDesignation={setDesignation} auth={setAuth} {...props}/>} />
    <Route path="/tableData" render={(props)=><TableData setAuth={setAuth} tablev={tablev} setTablev={setTablev} index={index} setIndex={setIndex} name={name} setName={setName} address={address}  setAddress={setAddress} contact={contact} setContact={setContact} designation={designation} setDesignation={setDesignation} auth={setAuth}  {...props}/>} />
    <Redirect from="/" to = "/signin"/>
    </Switch>
    </div>
  );
}

export default App;
