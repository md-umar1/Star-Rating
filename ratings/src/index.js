import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const Greet=()=>{
  return(
    <div><App/>
  </div>
  )
}
ReactDOM.render(<Greet/>,document.getElementById('root'));