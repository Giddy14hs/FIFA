import * as api from "../api"

export const getForms = () => async(dispatch) => {
  try {
    const { data } = await api.fetchForms();
    dispatch({ type: "FETCH_FORMS",  payload: data});
  } catch (error) {
    console.log(error.message)
  }
}
export const createForms = (products) => async(dispatch) => {
  try {
    const { data } = await api.createForms(products);
    dispatch({ type: "CREATE_FORMS",  payload: data});
  } catch (error) {
    console.log(error.message)
  }
}