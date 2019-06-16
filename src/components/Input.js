import React from 'react';

class Input extends React.Component {

    state = {
        valueIn: this.props.valueInput,
        nameInput: this.props.nameInput
    }

    getChange = (event) => {
        this.setState({valueIn: event.target.value});
        this.props.pushChange(event, this.state.nameInput);
    }

    render() {
        return (
            <input onChange={this.getChange}
                   type={this.props.typeInput}
                   value={this.state.valueIn}>
            </input>
        );
    }
}

export default Input;