import axios from 'axios';

const url = 'http://localhost:4000/users';
// console.log("i was here in api")

export const fetchPosts = () => axios.get(`${url}/help/post`);
export const createPost = (newPost) => axios.post(`${url}/help`, newPost);
export const likePost = (id) => axios.put(`${url}/${id}/likePost`)
