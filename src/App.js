import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { Heading } from './components/heading';
import { Input } from './components/input'
import { Button } from './components/button';

function App() {
  return (
    // <Fragment>
    //   <h1>Register here ...</h1>
    //   <div><input type = 'number' placeholder='mobile ...'></input></div><br/>
    //   <div><input type = 'password' placeholder='password ...'></input></div><br/>
    //   <button>Submit</button>
    // </Fragment>
    <Fragment>
    <Heading headingText = {'Register here ...'}/>
    <Input/>
    <Button buttonText = {'Submit'}/>
    </Fragment>
  );
}

export default App;
