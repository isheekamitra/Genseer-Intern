import ACTIONS from './index'
import axios from 'axios'

export const fetchAllques = async (token) => {
    const res = await axios.get('/user/all_ques', {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetAllques = (res) => {
    return {
        type: ACTIONS.GET_ALL_QUES,
        payload: res.data
    }
}