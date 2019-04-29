import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/Counter';
import Posts from './components/Posts';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter/>
        <Posts/>
      </div>
    </Provider>
  );
}

export default App;
