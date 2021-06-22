import React from 'react'
import QuestionForm from './QuestionForm'
import { useSelector } from 'react-redux'




const Live = () => {
    const auth = useSelector(state => state.auth)
    const { isLogged } = auth

    //console.log(isLogged)
    //console.log(user)


    return (
    
                 <>
                <div className="container-fluid">
                    <div className="row py-4">
                        <div className="col-12 col-md-7 col-lg-8">
                           
                        </div>
                        <div className="col-12 col-md-5 col-lg-4">
                            <QuestionForm />
                        </div>
                    </div>
                </div>
                </>
             


            
        
    );

}

export default Live