import * as api from "../api";
import {
    FETCH_ALL_REVIEWS,
    CREATE_REVIEW,
    UPDATE_REVIEW,
    DELETE_REVIEW
} from "../constants/actionTypes";

export const getReviews = () => async (dispatch) => {
    try {
        const { data } = await api.fetchStories();
        dispatch({ type: FETCH_ALL_REVIEWS, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

export const createReview = (review) => async (dispatch) => {
    try {
        const { data } = await api.createReview(review);
        dispatch({ type: CREATE_REVIEW, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

export const updateReview = (id, review) => async (dispatch) => {
    try {
        const { data } = await api.updateReview(id, review);

        dispatch({ type: UPDATE_REVIEW, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

export const deleteReview = (id) => async (dispatch) => {
    try {
        await api.deleteReview(id);

        dispatch({ type: DELETE_REVIEW, payload: id });
    } catch (error) {
        console.log(error.message)
    }
};
