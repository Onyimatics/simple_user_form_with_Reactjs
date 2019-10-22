import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store'
import FillForm from './components/form/Form';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FillForm />
      </div>
      </Provider>
  );
}



export default App;
