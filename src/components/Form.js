import React from 'react';
import '../style/Form.css';
import Button from './Button';
import Input from "./Input";

class Form extends React.Component {
    state = {
        importanceList: this.props.importanceList,
        itemTask: this.props.itemTask
    };

    pushProperty = (element, value) => {
        let {itemTask} = this.state;
        itemTask[element]=value;
    }

    addTask = () => {


    }

    componentWillMount(){//выполняется перед рендером
    }

    render() {
        const {visibleForm} = this.props;
        return (
            <div className={'backGr'} style={{visibility: visibleForm}} >
                <div className={'formTask'}>
                    <input onChange={(event) => this.pushProperty('titleTask',event.target.value)}
                           value={this.state.itemTask}>
                    </input>

                    <input onChange={(event) => this.setState({descriptionTask: event.target.value})}
                           value={this.state.descriptionTask}>
                    </input>

                    <input type='date' onChange={(event) => this.setState({dateDeadline: event.target.value})}
                           value={this.state.dateDeadline}>
                    </input>

                    <input type='date' onChange={(event) => this.setState({dateCompleted: event.target.value})}
                           value={this.state.dateCompleted}>
                    </input>

                    <select
                        onChange={(event) => this.setState({importanceTask: event.target[event.target.selectedIndex].label})}>
                        {this.state.importance.map((element, index) =>
                            <option
                                value={this.state.importanceTask}
                                key={index}>
                                {element}
                            </option>
                        )}
                    </select>
                    <Button
                        handleClick={this.pushTask}
                        nameBtn='Add'
                    />
                    <Button
                        handleClick={this.closeForm}
                        nameBtn='Close'
                    />
                </div>
            </div>
        );
    }
}

export default Form;