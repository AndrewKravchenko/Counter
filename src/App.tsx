import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./Counter";
import {SettingCounter} from "./SettingCounter";


function App() {

  return (
    <div className="App">
        {/*<SettingCounter/>*/}
        <Counter/>
    </div>
  );
}

export default App;
