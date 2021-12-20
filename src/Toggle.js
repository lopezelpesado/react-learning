import React from "react";
import WarningBanner from "./WarningBanner";

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
    }

    handleClick = () => {
        this.setState(prevState => ({showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <>
            <WarningBanner warn={this.state.showWarning} />
            <button onClick={this.handleClick}>
                {this.state.showWarning ? "ON" : "OFF"}
            </button>
            </>
        );
    }
}

export default Toggle;