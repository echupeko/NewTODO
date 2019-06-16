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
        toDoItems: []
    }

    pushTask = () => {
        const list = this.state.toDoItems;
        list.push({
            titleTask: this.state.titleTask,
            descriptionTask: this.state.descriptionTask,
            importanceTask: this.state.importanceTask,
            dateDeadline: this.state.dateDeadline.toLocaleDateString('ru-RU'),
            dateCompleted: this.state.dateCompleted.toLocaleDateString('ru-RU')
        });
        this.setState({toDoItems: list});
        this.props.handleClick(this.state.toDoItems);
    }

    giveChange = (event, value) => {
        let stateObject = function () {//динамическое изменение стэйта
            let returnObj = {};
            returnObj[value] = event.target.value;
            return returnObj;
        }.bind(event)();
        this.setState(stateObject);
    }

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
            valueInput: new Date().toLocaleDateString('Ru-ru'),
            nameInput: 'dateDeadLine',
            onChange: {}
        }, {
            typeInput: 'date',
            valueInput: new Date().toLocaleDateString('Ru-ru'),
            nameInput: 'dateComplited',
            onChange: {}
        }];

        return (

            <div style={{visibility: this.props.visibleForm}}>
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