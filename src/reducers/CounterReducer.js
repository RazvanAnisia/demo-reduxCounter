
//Responsible for returning the new state depending on the action
const  counterReducer = ( state= {} , action) => {
    switch( action.type ){ 
     case 'INCREMENT':
       return state + 1;
     case 'DECREMENT':
       return state - 1;
     default: 
       return state;
    }
}

export default counterReducer;