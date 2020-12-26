import React from 'react';
import './App.css';

type DisplayType = {
    num: number
}

export function Display(props: DisplayType) {
    return <h1 className= "displayCounter"> {props.num}</h1>
}