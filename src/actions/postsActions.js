import { FETCH_POSTS } from './types';
import  {loadingState, loadingFinished} from './Loading';

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
    dispatch(loadingState());
    setTimeout( () =>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(posts => {
            dispatch(loadingFinished());
            dispatch(fetchPosts(posts));

        })
        .catch(err=> console.log(err))
    },1000)
    

}

export default fetchPostsAsync;