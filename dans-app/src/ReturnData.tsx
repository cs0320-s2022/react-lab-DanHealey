import React, {useState} from 'react';
import './App.css';
import TextBox from './TextBox';
// @ts-ignore

function ReturnData(props : {data : any}) {



    return <ul>{props.data.map((x : any) => <li>{x}</li>)}</ul>;
}

export default ReturnData;
