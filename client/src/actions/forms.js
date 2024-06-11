import * as api from "../api";
import {
    CREATE_FORMS
} from "../constants/actionTypes";


export const createForms = (Form) => async (dispatch) => {
    try {
        const { data } = await api.createForms(Form);
        dispatch({ type: CREATE_FORMS, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};
