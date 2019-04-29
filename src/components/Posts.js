import React, { Component } from 'react'
import { connect } from 'react-redux';
import fetchPostsAsync  from '../actions/postsActions';

class Counter extends Component {
  //dispatch() is passed down as a prop, because of mapStateToProps in connect()
  fetchDataHandler = () => {
    console.log(this.props.fetchPostsAsync())
  }
  
  render() {
   
    return(
      <div className='posts-container'>
        <h1>Posts</h1>
        <button onClick={this.fetchDataHandler}>Show posts</button>
      </div>
    )
  }
}

//we map to state.counter because that is what we mapped in combineReducers 
function mapStateToProps (state) {
    return {
        state:state.posts
    }
}

export default connect(mapStateToProps, {fetchPostsAsync} )(Counter);
