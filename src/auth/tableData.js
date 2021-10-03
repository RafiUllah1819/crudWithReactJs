import React , {useEffect, useState} from 'react';
import { NavLink ,useHistory } from 'react-router-dom'

const TableData = ({tablev,setIndex, setTablev,
                    name, setName,
                    address, setAddress,
                    contact, setContact,
                    designation, setDesignation,
                    index , setAuth,count}) =>{

    const hist = useHistory()                    
   
    useEffect(()=>{
       const newVal = JSON.parse(localStorage.getItem('addRecord')) || []
       setTablev(newVal)
    },[])

    const editData = (i) =>{
        setIndex(i);
        setName(tablev[i].name);
        setAddress(tablev[i].address);
        setContact(tablev[i].contact);
        setDesignation(tablev[i].designation);
        hist.push('/home')
     }
 

    const deleteRecord = (id) =>{
        console.log(id)
        // const newData = [...tablev]
        // newData.slice(i,1)
        // setTablev(newData)
        const newData = tablev.filter((item, fil)=>{
            return fil !== id
        })
        localStorage.setItem('addRecord', JSON.stringify(newData))
        setTablev(newData)
    }

    return(
        <div>
               <div className="container"> 
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Address</th>
                                <th>Designation</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                <th>{count}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tablev.map((value,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{value.name}</td>
                                        <td>{value.contact}</td>
                                        <td>{value.address}</td>
                                        <td>{value.designation}</td>
                                        <td><button className="btn btn-secondary"
                                        onClick={()=>editData(i)}
                                        >Edit</button></td>
                                        <td><button className="btn btn-danger"
                                        onClick={()=> deleteRecord(i)}
                                        >Delete</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <NavLink to="/home">
                        <button className="btn btn-success" 
                        style={{width: '148px'}}
                        >Add New Record</button></NavLink>
               </div>
        </div>
    )
}
export default TableData