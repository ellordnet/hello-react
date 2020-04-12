import React, {Component} from 'react';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample'

import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    const text = '안녕하세요.';
    const condition = true;
    const style = {
      backgroundColor : 'gray',
      border: '1px solid #ccc',
      height : Math.round(Math.random() * 300) + 50,
      width : Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    };

    return(
      <IterationSample />

    );
  }
}

export default App;
