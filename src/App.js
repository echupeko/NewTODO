import React from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";

class App extends React.Component {
    state = {
        toDoItems: [],
        visibleForm: 'hidden'
    };

    addTask = (value) => {
        this.setState({toDoItems: value});
    }

    openMenuClick = () => {
        this.setState({visibleForm: (this.state.visibleForm === 'hidden') ? 'visible' : 'hidden'});
    }

    render() {
        return (
            <div className="App">
                <Form
                    handleClick={this.addTask}
                    visibleForm={this.state.visibleForm}
                    /*создать проспу для получения данных из form*/
                />
                <Header/>
                <Body
                    listItems = {this.state.toDoItems}
                    handleClick={this.openMenuClick}
                />
            </div>
        );
    }
}

export default App;
