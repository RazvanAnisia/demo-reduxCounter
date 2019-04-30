import { FETCH_POSTS } from './types';

//actionCreator that will be dispatched inside the async actionCreator
const fetchPosts = (posts) => {
    return {
        type:FETCH_POSTS,
        payload: posts
    }
}

//using thunk middleware syntax  we are fetching the data
//then dispatching the fetchPost action while passing the payload from the API
const fetchPostsAsync = () => (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(posts => dispatch(fetchPosts(posts)))
    .catch(err=> console.log(err))
}

export default fetchPostsAsync;