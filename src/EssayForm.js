import React from "react";

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Write an essay on your fave DOM '};
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        alert('You submitted this essay: ' + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    DOM Essay:{' '}
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit Essay" />
            </form>
        );
    }
}

export default EssayForm;