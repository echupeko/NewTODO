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

    addTask = () => {
        console.log("re");
        this.setState({toDoItems: 's'});
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
                    handleClick={this.openMenuClick}
                />
            </div>
        );
    }
}

export default App;
