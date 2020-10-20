import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Person from './ReactTest/Person';
import InputInfo from './ReactTest/InputInfo';


let p1 = {
    name:"黄先国",
    age:32,
    sex:"男"
}
let p2 = {
  age:3,
  name:"黄先",
  sex:"男"
}
// console.log(p2)
// Person.props = {
//   name: PropTypes.string,
//   age:PropTypes.number,
//   sex:PropTypes.number
// }


ReactDOM.render(
  
  <React.StrictMode>
    {/* <App /> */}
    {/* <Person name={p1.name} age={p1.age} sex={p1.sex}/> */}
    <Person {...p2}/>
    <InputInfo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
