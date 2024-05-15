import axios from "axios"

//const url = "http://localhost:5001/stories" 415

const api = axios.create({baseURL: "http://localhost:5001"});

api.interceptors.request.use((req) => {

  if (localStorage.getItem("profile")) {
    const profile = JSON.parse(localStorage.getItem("profile"))

    req.headers.Authorization = `Bearer ${profile.token}`;
  }
  return req;

});

export const fetchReviews = async() => {api.get("/reviews");}
export const createReview = async (review)=> api.post("/reviews", review);
export const updateReview = async (id, review) => api.patch(`${"/reviews"}/${id}`, review);
export const deleteReview = async (id) => api.delete(`${"/reviews"}/${id}`);

export const login = async(formValues) => api.post("/user/login", formValues);
export const signup = async(formValues) => api.post("/user/signup", formValues);