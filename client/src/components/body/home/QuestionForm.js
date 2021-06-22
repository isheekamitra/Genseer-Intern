import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import './question.css'

const QuestionForm = () => {
    const[userdata,setuserdata]=useState({message
    :""});
       
        //storing data
        const handlechange=(e)=>{
            const name=e.target.name;
            const value=e.target.value;
            setuserdata({...userdata,[name]:value});
        }
        //send data to backend
        const submitform=async(e)=>{
            e.preventDefault();
            const{name,email,message}=userdata;
            
        }
   
    return (
        <div className="contact_form">
        <div className="container">
            <div className="row">
                <div className="col-lg10 offset-lg-1">
                    <div className="contact_form_container py-4">
                        <div className="contact_form_title">
                            Questions</div>
                            <form method="POST" id="contact_form">
                            
                                 <div className="contact-form-text mt-5">
                                 <textarea className="text_feild contact_form_message"
                                     id="j"
                                     cols="70"
                                     rows="5"
                                     name="message"
                                    value={userdata.message}
                                    onChange={handlechange}
                                     placeholder="Message">
                                     
    
                                 </textarea>
                                 </div>
                                 <div className="contact_form_button">
                                       <button type="submit" 
                                       onClick={submitform}
                                       className="button contact_submit_button">Send Message</button>
                                 </div>
                            </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    );
}


export default QuestionForm;
