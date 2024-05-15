const storyReducer = (state = [], action) => {
  switch (action.type) {
      case "FETCH_ALL_REVIEWS":
          return action.payload;
      case "CREATE_REVIEW":
          return [...state, action.payload];
      case "UPDATE_REVIEW":
          return state.map(review => review._id === action.payload._id ? action.payload : story);
      case "DELETE_REVIEW":
          return state.filter(review => review._id !== action.payload);
      default:
          return state;
  }

};

export default storyReducer;