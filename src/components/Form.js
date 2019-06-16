import React from 'react';
import Button from './Button'
import Input from "./Input";

class Form extends React.Component {
    state = {
        importance: this.props.importance,
        titleTask: '',
        descriptionTask: '',
        importanceTask: '',
        dateDeadline: new Date(),
        dateCompleted: new Date(),
    };

    pushTask = () => {
        const item = {
            titleTask: this.state.titleTask,
            descriptionTask: this.state.descriptionTask,
            importanceTask: this.state.importanceTask,
            dateDeadline: this.state.dateDeadline.toLocaleDateString('ru-RU'),
            dateCompleted: this.state.dateCompleted.toLocaleDateString('ru-RU')
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
            valueInput: new Date().toLocaleDateString('ru-RU'),
            nameInput: 'dateDeadLine',
            onChange: {}
        }, {
            typeInput: 'date',
            valueInput: new Date().toLocaleDateString('ru-RU'),
            nameInput: 'dateComplited',
            onChange: {}
        }];
        const {visibleForm} = this.props;
        return (
            <div style={{visibility: visibleForm}}>
                {list.map((element, index) =>
                    <Input
                        pushChange={this.giveChange}
                        nameInput={element.nameInput}
                        typeInput={element.typeInput}
                        valueInput={element.valueInput}
                        key={index}
                    />)}
                <Button
                    handleClick={this.pushTask}
                    nameBtn='Add'
                />
            </div>
        );
    }
}

export default Form;