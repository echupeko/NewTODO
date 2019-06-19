import React from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";

class App extends React.Component {
    state = {
        idTask: 0,
        items: null,
        toDoItems: [],
        visibleForm: 'hidden',
        importance: ['Все', 'Обычная', 'Важная', 'Очень важная'],
        inputList: [{
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
        }]
    };

    addTask = (item) => {
        console.log("item", item);
        item.idTask = this.state.idTask;
        const {toDoItems} = this.state;
        toDoItems.push(item);
        this.setState({toDoItems});
        this.setState({idTask: this.state.idTask + 1});
        this.openMenuClick();
    };

    openMenuClick = () => {
        this.setState({visibleForm: this.state.visibleForm === 'hidden' ? 'visible' : 'hidden'});
    };

    changedItem = (index) => {
        const {toDoItems} = this.state;
        let {items} = this.state;
        items = toDoItems.filter(item => item.idTask === index);
        this.openMenuClick();
        this.setState({items});
    }

    checkedTask = (index) => {
        let {toDoItems} = this.state;
        toDoItems.forEach(function (item) {
            if (item.idTask === index) {item.checkTask = !item.checkTask};
        })
        this.setState({toDoItems});
    }

    removeTask = () => {
        let {toDoItems} = this.state;
        toDoItems = toDoItems.filter(item => !item.checkTask);
        this.setState({toDoItems});
        this.setState({idTask: this.state.toDoItems.length});

    }

    render() {
        return (
            <div className="App">
                {this.state.visibleForm === 'visible' && <Form
                    items = {this.state.items}
                    inputList = {this.state.inputList}
                    importance={this.state.importance}
                    addTask={this.addTask}
                    closeMenu = {this.openMenuClick}
                    visibleForm={this.state.visibleForm}
                />}
                {this.state.visibleForm === 'hidden' && <div>
                    <Header/>
                    <Body
                        toDoItems={this.state.toDoItems}
                        handleClick={this.openMenuClick}
                        removeTask={this.removeTask}
                        changedItem = {this.changedItem}
                        checkedTask={this.checkedTask}
                    />
                </div>}
            </div>
        );


    }
}

export default App;