import React, { Component } from 'react'
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/counterActions';

class Counter extends Component {
  //dispatch() is passed down as a prop, because of mapStateToPros in connect()
  incrementHandler = () => {
      this.props.dispatch(incrementCounter())
     
  }
  decrementCounter = () => {
      this.props.dispatch(decrementCounter())
  }
  render() {
    const btnStyles = {
        background:'white', 
        border:'1px solid black',
        padding:'5px',
        margin:'4px'
    }
    return(
      <div className='counter-container'>
        <h1>Counter</h1>
        <h2 style={{textAlign:'center'}}>{this.props.state} </h2> 
        <button style={btnStyles} onClick={this.incrementHandler}>Increment +</button>
        <button style={btnStyles} onClick={this.decrementCounter}>Decrement -</button>
      </div>
    )
  }
}

//we map to state.counter because that is what we mapped in combineReducers 
function mapStateToProps (state) {
    return {
        state:state.counter
    }
}

export default connect(mapStateToProps)(Counter);
