import ACTIONS from '../actions/'

const questions =[]

const quesReducer = (state = questions, action) => {
    switch(action.type){
        case ACTIONS.GET_ALL_QUES:
            return action.payload
        default:
            return state
    }
}

export default quesReducer