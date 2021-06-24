import React, { useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { dispatchGetAllques, fetchAllques } from "../redux/actions/quesAction"
const Questiontable = () => {
    const {auth,token,questions} = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        if(auth.isAdmin){
            fetchAllques(token).then(res =>{
                dispatch(dispatchGetAllques(res))
            })
        }
    },[token, auth.isAdmin, dispatch])
    return (
        <>
        
        <div style={{overflowX: "auto"}}>
                    <table className="customers">
                        <thead>
                            <tr>
                               <th>Id</th>
                                <th>User Id</th>
                                <th>Question</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                questions.map(ques => (
                                    <tr key={ques._id}>
                                        <td>{ques._id}</td>
                                        <td>{ques.user_id}</td>
                                        <td>{ques.question}</td>
                                        
                                   
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
           
        </>
    )
}



export default Questiontable;