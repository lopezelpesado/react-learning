import React from "react";
import TemperatureInput from "./TemperatureInput";

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