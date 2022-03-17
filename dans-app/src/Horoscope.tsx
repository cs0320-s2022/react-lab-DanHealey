import React, {useState} from 'react';
import './App.css';
import TextBox from './TextBox';
import ReturnData from "./ReturnData";
// @ts-ignore
import { AwesomeButton } from "react-awesome-button";
import axios from 'axios';

function Horoscope() {
    const [sunValue, setSun] = useState("");
    const [moonValue, setMoon] = useState("");
    const [risingValue, setRising] = useState("");

    //TODO: Fill in the ? with appropriate names/values for a horoscope.
    //HINT: Look at the HoroscopeHandler's response in Main.java to choose a default useState value.
    const [horoscope, setHoroscope] = useState([]);

    const requestHoroscope = () => {

        type toSend = {
            sun : string,
            moon : string,
            rising: string
        };
        const toSend = {
            //TODO: Pass in the values for the data. Follow the format the route expects!
            sun: sunValue,
            moon: moonValue,
            rising: risingValue,
        };
        console.log(toSend);
        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import axios!
        //TODO: Fill in 1) location for request 2) your data 3) configuration
        axios.post("http://localhost:4567/horoscope", toSend, config)
            .then(response => {
                console.log(response.data);
                //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
                //Note: It is very important that you understand how this is set up and why it works!
                setHoroscope(response.data["horoscope"]);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
    <div className="horoscope">
        <h1>Horoscope</h1>
        <TextBox change={setSun} label={"Sun Sign"} />
        <TextBox change={setMoon} label={"Moon Sign"}/>
        <TextBox change={setRising} label={"Rising Sign"}/>
        <AwesomeButton onPress={requestHoroscope}>Submit</AwesomeButton>
        <ReturnData data={horoscope} />
    </div>
  );
}

export default Horoscope;
