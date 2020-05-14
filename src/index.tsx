import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App/App';

import '@openfin/desktop-ui/ui-styles.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
