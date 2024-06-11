import { combineReducers } from "redux";
import Contacts from "./review"
import authentication from "./authentication";

export default combineReducers({
  contacts: Contacts,
  authentication
})