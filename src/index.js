import React from 'react';
import ReactDOM from 'react-dom/client';

//Chapter Five: What is State
// import App from './intro-state/app';

//Chapter Five: Why Need State & How to update State
// import App from './update-state/app';

//Chapter Five: Sample Timer
// import App from './sample-timer/app';

//Chapter Five: Practice Problem 1
import App from './practice-problem-1/app';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
