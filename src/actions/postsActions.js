import { FETCH_POSTS } from './types';

// const fetchPosts = (posts) => {
//     return {
//         type:FETCH_POSTS,
//         payload: posts
//     }
// }

const fetchPostsAsync = () => (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/todos/posts')
        .then(response => response.json())
        .then(data => {
            dispatch({
                type:FETCH_POSTS,
                payload: data
            })
        })
        .catch(err=> console.log(err))
   
}

export default fetchPostsAsync;