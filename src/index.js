import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/common/style/reset.css';
import '../src/common/style/normalize.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './common/style/frame.css'

// ReactDOM.render(<App />, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/**"homepage": "https://github.com/ASH-ChangKy/music-bar/build/# "**/