import React from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";

class App extends React.Component {
    state = {
        importance: ['Все', 'Обычная', 'Важная', 'Очень важная'],
        idTask: 0,
        toDoItems: [],
        visibleForm: 'hidden'
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

    checkedTask = (index) => {
        const {toDoItems} = this.state;
        toDoItems[index].checkTask = !toDoItems[index].checkTask;
    }

    removeTask = () => {
        let {toDoItems} = this.state;
        toDoItems = toDoItems.filter(item => !item.checkTask);
        this.setState({toDoItems});
    }

    render() {

        return (

            <div className="App">
                {this.state.visibleForm === 'visible' && <Form
                    importance={this.state.importance}
                    addTask={this.addTask}
                    visibleForm={this.state.visibleForm}
                />}
                {this.state.visibleForm === 'hidden' && <div>
                    <Header/>
                    <Body
                        toDoItems={this.state.toDoItems}
                        handleClick={this.openMenuClick}
                        removeTask={this.removeTask}
                        checkedTask={this.checkedTask}
                    />
                </div>}
            </div>
        );


    }
}

export default App;