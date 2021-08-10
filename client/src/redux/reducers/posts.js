import { FETCH_ALL, CREATE, LIKE, COMMENT,VOLUNTEER } from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...posts];

    case VOLUNTEER:
      return [...posts];

    case COMMENT:
      return posts.map((post)=>(post._id === action.payload._id ? action.payload : post))

    case LIKE:
      return posts.map((post)=>(post._id === action.payload._id ? action.payload : post))
      
    default:
      return posts;
  }
};
