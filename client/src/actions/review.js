import * as api from "../api";
import {
    CREATE_CONTACT
} from "../constants/actionTypes";

export const createContact = (contact) => async (dispatch) => {
    try {
        const { data } = await api.createContact(contact);
        dispatch({ type: CREATE_CONTACT, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};
