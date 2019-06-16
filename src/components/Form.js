import React from 'react';
import '../style/Form.css';
import Button from './Button';
import Input from "./Input";

class Form extends React.Component {
    state = {
        importance: this.props.importance,
        titleTask: '',
        descriptionTask: '',
        importanceTask: '',
        dateDeadLine: new Date(),
        dateCompleted: new Date(),
    };

    pushTask = () => {
        const item = {
            titleTask: this.state.titleTask,
            descriptionTask: this.state.descriptionTask,
            importanceTask: this.state.importanceTask,
            dateDeadline: this.state.dateDeadLine,
            dateCompleted: this.state.dateComplited
        };
        this.props.addTask(item);
    };

    giveChange = (event, value) => {
        const stateObject = function () {//динамическое изменение стэйта
            return {
                [value]: event.target.value || ''
            };
        }.bind(event)();
        this.setState(stateObject);
    };

    render() {
        const list = [{
            typeInput: 'text',
            valueInput: 'Name task',
            nameInput: 'titleTask',
            onChange: {}
        }, {
            typeInput: 'text',
            valueInput: 'Description task',
            nameInput: 'descriptionTask',
            onChange: {}
        }, {
            typeInput: 'date',
            valueInput: new Date(),
            nameInput: 'dateDeadLine',
            onChange: {}
        }, {
            typeInput: 'date',
            valueInput: new Date(),
            nameInput: 'dateComplited',
            onChange: {}
        }];
        const {visibleForm} = this.props;
        return (
            <div className={'backGr'} style={{visibility: visibleForm}}>
                <div className={'formTask'}>
                {list.map((element, index) =>
                    <Input
                        pushChange={this.giveChange}
                        nameInput={element.nameInput}
                        typeInput={element.typeInput}
                        valueInput={element.valueInput}
                        key={index}
                    />)}
                    <select  onChange={(event) => this.setState({importanceTask: event.target[event.target.selectedIndex].label})}>
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
                </div>
            </div>
        );
    }
}

export default Form;