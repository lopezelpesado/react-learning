import React from "react";
import FormattedDate from "./FormattedDate";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello there!</h1>
                <h2>The time, sponsored by me, is currently: <FormattedDate date={this.state.date} /></h2>
            </div>
        );
    }
}

export default Clock;