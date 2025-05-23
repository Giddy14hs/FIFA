import axios from "axios"


const api = axios.create({baseURL: "https://brighterworldltd.com/"});

api.interceptors.request.use((req) => {

  if (localStorage.getItem("profile")) {
    const profile = JSON.parse(localStorage.getItem("profile"))

    req.headers.Authorization = `Bearer ${profile.token}`;
  }
  return req;

});

export const fetchContacts = async() => {
  return api.get("/contact");}

export const createContact = async (newContact)=> {
  return api.post("/contact", newContact)};

export const fetchForms = async() => {
  return api.post("/products")
}
export const createForms = async(newForm) => {
  return api.post("/products", newForm)
};

export const login = async(formValues) => {
  return api.post("/user/login", formValues)};

export const signup = async(formValues) => {
  return api.post("/user/signup", formValues)};