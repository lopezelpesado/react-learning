import React from "react";
import TemperatureInput from "./TemperatureInput";

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) return '';
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends React.Component {
    render() {
        return (
            <>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </>
        );
    }
}

export default Calculator;