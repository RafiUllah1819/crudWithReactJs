import React, {useState , useEffect} from 'react'
import { NavLink , useHistory } from 'react-router-dom'
import TableData from './tableData'

const Home = ({auth,
    name, setName,
    address, setAddress,
    contact, setContact,
    designation, setDesignation,
    index, setIndex})  =>{
    const [data, setData] = useState([])
    const [count ,setCount] = useState(0)
  
    const his = useHistory()
    
    const addRecord = () =>{
        const add = JSON.parse(localStorage.getItem('addRecord')) || [] 
        add.push({name,address,contact,designation})
        localStorage.setItem('addRecord', JSON.stringify(add))
        his.push('/tableData')
        auth(true)
        setCount(count+1);
        
    }
    <TableData count={count}/>
    // useEffect(()=>{
    //     const newItem = data.slice()
    //     const newdata = JSON.parse(localStorage.getItem('addRecord'))
    //     newItem.push(newdata)
    //     setData(newItem)
    // },[])

    return(
      <div className="home">
     <div className="home-inner">
     <div className="form entry">
            <div className="container">
                <h2>Enter Record</h2>
                <div className="entry_form">
                <div className="form-group mb-3">
                <input type="text" 
                placeholder="Name"
                className="form-control"
                value = {name}
                onChange ={(e)=>setName(e.target.value)}
                // onChange ={(e)=>setPerson({name:e.target.value,})}

                />
            </div>
            <div className="form-group mb-3">
                <input type="text" 
                placeholder="Address"
                className="form-control"
                value = {address}
                onChange ={(e)=>setAddress(e.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <input type="text" 
                placeholder="Contact"
                className="form-control"
                value = {contact}
                onChange ={(e)=>setContact(e.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <input type="text" 
                placeholder="Designation"
                className="form-control"
                value = {designation}
                onChange ={(e)=>setDesignation(e.target.value)}
                />
            </div>
            <button className="btn-btn-success"
            onClick={addRecord}
            >Add Record</button>
            <NavLink to="/tableData">Total Records</NavLink>
                </div>
            </div>
          
        </div>
     </div>
      
      </div>
    )
}

    export default Home