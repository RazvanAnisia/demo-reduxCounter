import React, { Component } from 'react'
import { connect } from 'react-redux';
import fetchPostsAsync  from '../actions/postsActions';

class Posts extends Component {
  //dispatch() is passed down as a prop, because of mapStateToProps in connect()
  //calling the async action creator, so we can get the api apyload into the state
  fetchDataHandler = () => {
   this.props.fetchPostsAsync();
  }
  
  render() {
    const posts = this.props.state.posts;
    const displayedPosts =  posts 
    ? posts.map(post =>(
        <div key={post.id} classname='post'>
          <h5 className='post-title'>{post.title.toUpperCase()}</h5>
          <p className='post-body'>{post.body}</p>
        </div>  
    ) )
    : null;
    const loading =  this.props.loading.loading ? (<div class="loader"></div>) : null;
  

   return (
      <div className='posts-container'>
        <h1>Posts</h1>
        <button  className='posts-button' onClick={this.fetchDataHandler}>Show posts</button>
        <div className='posts'>
          { displayedPosts}
          { loading }
        </div>
      </div>
    )
  }
}

//we map to state.posts because that is what we mapped in combineReducers 
function mapStateToProps (state) {
    return {
        state:state.posts,
        loading:state.loading
    }
}

//we need to padd fetchPostsAsync in connect, so we can have it as a props on the component
//so we can call the function, on the show Posts handler
export default connect(mapStateToProps, {fetchPostsAsync} )(Posts);
