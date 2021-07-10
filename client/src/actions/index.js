import { get } from "axios";

export const SET_POSTS = "SET_POSTS";
export const ADD_POST = "ADD_POST";
export const SET_POST = "SET_POST";
export const REMOVE_POST = "REMOVE_POST";
export const REPLACE_POST = "REPLACE_POST";


export function setPosts() {

  return function (dispatch) {
    return get("/api/posts")
      .then(function (response) {
        dispatch({ type: SET_POSTS, posts: response.data });
      })
      .catch(function (err) {
        console.log("error", err);
      });
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post: post,
  };
}

export function setPost(post) {
  return {
    type: SET_POST,
    post: post,
  };
}

export function removePost(_id) {
  return {
    type: REMOVE_POST,
    _id: _id,
  };
}

export function replacePost(post) {
  return {
    type: REPLACE_POST,
    post: post,
  };
}
