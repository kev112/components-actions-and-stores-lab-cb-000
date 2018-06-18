import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './store';
import bandReducer from './reducers/band_reducer'

const store = createStore(bandReducer);

function render(){
  ReactDOM.render(<BandInput store={store} />, document.getElementById('container'))
}
