import React, {  useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import './question.css'
const initialState = {
    question: '',
    err: '',
    success: ''
}
const QuestionForm = () => {
    const {auth}= useSelector(state=>state)
    const { user } = auth
    
    const [data, setData] = useState(initialState)
    const { question} = data

  
        const handlechange= e => {
            const { name, value } = e.target
            setData({ ...data, [name]: value, err: '', success: '', loading: false })
        }
    
        const clearMessage = () => {
            setTimeout(() => {
                setData({ ...data, question: '', err: '', success: '', loading: false })
            }, 3000)
        }
        const handleSubmit = async e => {
            e.preventDefault()
            if(data.question)
              {   try {
                //console.log('submiting ques')
                setData({ ...data, loading: true })
                await axios.post('/user/question', { user, question }).then((response) => {
                    setData({ ...data, question: '', err: '', success: response.data.msg })
                })
    
            } catch (err) {
                err.response.data.msg &&
                    setData({ ...data, err: err.response.data.msg, success: '' })
            }
            clearMessage();
                 window.alert('Question sent succesfully!')
        }
                else
                window.alert('Please fill your question!')
          
        }
    return (
        <div className="contact_form">
        <div className="container">
            <div className="row">
                <div className="col-lg10 offset-lg-1">
                    <div className="contact_form_container py-4">
                        <div className="contact_form_title">
                            Questions</div>
                            <form id="contact_form" onSubmit={handleSubmit}>
                            
                                 <div className="contact-form-text mt-5">
                                 <textarea className="text_feild contact_form_message"
                                     id="question"
                                     cols="70"
                                     rows="5"
                                     name="question"
                                    value={data.question}
                                    onChange={handlechange}
                                     placeholder="Message">
                                     
    
                                 </textarea>
                                 </div>
                                 <div className="contact_form_button">
                                       <button type="submit" 
                                       
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
