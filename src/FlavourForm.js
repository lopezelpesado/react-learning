import React from "react";

class FlavourForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Vanilla'};
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        alert('You selected this flavour: ' + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Select a flavour:{' '}
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Vanilla">Vanilla</option>
                        <option value="Chocolate">Chocolate</option>
                        <option value="White Chocolate">White Chocolate</option>
                        <option value="Milk Chocolate">Milk Chocolate</option>
                    </select>
                </label>
                <input type="submit" value="Submit Flavour" />
            </form>
        );
    }
}

export default FlavourForm;