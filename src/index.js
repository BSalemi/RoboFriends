import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons';


ReactDOM.render(
  <React.StrictMode>
        <CardList/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
