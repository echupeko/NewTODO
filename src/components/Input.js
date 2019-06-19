import React from 'react';

class Input extends React.Component {

    state = {
        //valueChange: this.props.valueInput,
        nameInput: this.props.nameInput
    }

    getChange = (event) => {
        this.setState({valueChange: event.target.value});
        this.props.setValueInput(event, this.state.nameInput);
    }

    render() {
        return (
            <input onChange={this.getChange}
                   type={this.props.typeInput}
                   value={this.state.valueChange}>
            </input>
        );
    }
}

export default Input;