import React, { useEffect } from 'react'
import { useState } from 'react'
import { getData } from '../config/firebasemethod'

export const StudentsList = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        getData('students')
        .then((res)=>{
            setData(res)
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <>
        <h1>Students List</h1>
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Cnic</th>
                
            </tr>
            <tbody>
                {data && data.length>0 ?
                    data.map((x)=>(
                        <tr>
                            <td>{x.firstName}</td>
                            <td>{x.lastName}</td>
                            <td>{x.cnic}</td>

                        </tr>
                    )):
                    null
                }
            </tbody>
        </table>
        </>    
        )
        
    }