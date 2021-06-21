import React, { useEffect } from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Login from '../auth/Login'
import axios from 'axios'
import { dispatchGetAllUsers, fetchAllUsers } from '../../../redux/actions/usersAction'
import { useState } from 'react'
import Live from './Live'
const initialState = {
    name: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}
function Home() {

    const {users,auth,token} = useSelector(state => state)
    
    const {user} = auth
  const [data, setData] = useState(initialState)


    const [loading, setLoading] = useState(false)
    const [callback, setCallback] = useState(false)

    const dispatch = useDispatch()
 // console.log(users);
  useEffect(() => {
    if(auth.isAdmin){
        fetchAllUsers(token).then(res =>{
            dispatch(dispatchGetAllUsers(res))
        })
    }
},[token, auth.isAdmin, dispatch])
const handleDelete = async (id) => {
    try {
        if(user._id !== id){
            if(window.confirm("Are you sure you want to delete this account?")){
                setLoading(true)
                await axios.delete(`/user/delete/${id}`, {
                    headers: {Authorization: token}
                })
                setLoading(false)
                setCallback(!callback)
            }
        }
        
    } catch (err) {
        setData({...data, err: err.response.data.msg , success: ''})
    }
}

    return (
        <div className="home_pagek">
           {   auth.isLogged
              ? 
                auth.isAdmin
                ? <>
                
            <div className="col-right">
                <h2>Users</h2>
           
                <div style={{overflowX: "auto"}}>
                    <table className="customers">
                        <thead>
                            <tr>
                               <th>Id</th>
                                <th>Name</th>
                                {/* <th>Location</th>
                                <th>Speciality</th>
                                <th>Mobile No.</th> */}
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => (
                                    <tr key={user._id}>
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {
                                                user.role === 1
                                                ? <i className="fas fa-check" title="Admin"></i>
                                                : <i className="fas fa-times" title="User"></i>
                                            }
                                        </td>
                                        <td>
                                            <Link to={`/edit_user/${user._id}`}>
                                                <i className="fas fa-edit" title="Edit"></i>
                                            </Link>
                                            <i className="fas fa-trash-alt" title="Remove"
                                           onClick={() => handleDelete(user._id)} 

                                            ></i>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
           
            </div>
            
                </>
                :<Live/>
              : <Login/>
           }
        </div>
    )
}

export default Home
