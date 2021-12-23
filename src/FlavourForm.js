import React from "react";

class FlavourForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ['Vanilla', 'Chocolate']};
    }

    handleChange = (e) => {
        this.setState((oldState) => {
            console.log(oldState);
            if (!oldState.value.includes(e.target.value)) return {value: [...oldState.value, e.target.value]};
            return {value: oldState.value.filter(item => item !== e.target.value)};
        });
    }

    handleSubmit = (e) => {
        alert('You selected these flavours: ' + this.state.value.join(", "));
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Select at least one flavour:{' '}
                    <select multiple value={this.state.value} onChange={this.handleChange}>
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