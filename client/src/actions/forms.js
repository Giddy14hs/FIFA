import * as api from "../api";
import {
    CREATE_FORMS,
    FETCH_FORMS
} from "../constants/actionTypes";

export const getForms = () => async(dispatch) =>{
    try {
      const response = await api.fetchForms();
      const data = response ? response.data : null;
      if (data) {
        dispatch({ type: FETCH_FORMS, payload: data });
      } else {
        console.log("Failed to fetch forms");
      }
    } catch (error) {
      console.log("Error in getForms", error.message)
    }
  };

export const createForms = (contact) => async (dispatch) => {
    try {
        const { data } = await api.createForms(contact);
        dispatch({ type: CREATE_FORMS, payload: data });
    } catch (error) {
      //if (error.response && error.response.status === 409) {
        //console.error('Conflict error:', error.response.data.message);
    //}else {
        console.log("Error in createForms", error.message)
    
    //}
  }
};
