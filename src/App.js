import React from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";


class App extends React.Component {
    state = {
        itemTask: {},
        toDoItems: [],
        visibleForm: 'hidden',
        importanceList: ['Все', 'Обычная', 'Важная', 'Очень важная']
    };


    addTask = (item) => {
        item.idTask = this.state.toDoItems.length;
        const {toDoItems} = this.state;
        toDoItems.push(item);
        this.setState({toDoItems});
        this.openForm();
    };

    openForm = () => {
        this.setState({visibleForm: this.state.visibleForm === 'hidden' ? 'visible' : 'hidden'});
    };

    changedItem = (index) => {
        const {toDoItems} = this.state;
        let {items} = this.state;
        items = toDoItems.filter(item => item.idTask === index);
        this.openForm();
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
                    itemTask = {{}}
                    importanceList={this.state.importanceList}
                    addTask={this.addTask}
                    closeForm = {this.openForm}
                    visibleForm={this.state.visibleForm}
                />}
                {this.state.visibleForm === 'hidden' && <div>
                    <Header/>
                    <Body
                        toDoItems={this.state.toDoItems}
                        handleClick={this.openForm}
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