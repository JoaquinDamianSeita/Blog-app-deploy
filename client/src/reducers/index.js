import { combineReducers } from "redux";
import posts from "./postsReducer";
import post from "./postReducer";

export default combineReducers({
    posts: posts,
    post: post,
});