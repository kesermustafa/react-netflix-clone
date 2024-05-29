import {ActionTypes} from "../actionTypes.js";

export const getPopuler = () => (dispatch) =>{
    dispatch({
        type:ActionTypes.MOVIES_LOADING
    })
}