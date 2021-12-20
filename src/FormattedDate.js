import React from "react";

class FormattedDate extends React.Component {
    render() {
        return this.props.date.toLocaleTimeString()
    }
}

export default FormattedDate;