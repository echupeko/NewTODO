import React from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";

class App extends React.Component {
    state = {
        importance: ['Все', 'Обычная', 'Важная', 'Очень важная'],
        toDoItems: [],
        visibleForm: 'hidden'
    };

    addTask = (item) => {
        console.log("item", item);
        const {toDoItems} = this.state;
        toDoItems.push(item);
        this.setState({toDoItems});
        this.openMenuClick();
    };

    openMenuClick = () => {
        this.setState({visibleForm: this.state.visibleForm === 'hidden' ? 'visible' : 'hidden'});
    };

    render() {

        return (

            <div className="App">
                {this.state.visibleForm === 'visible' && <Form
                    importance={this.state.importance}
                    addTask={this.addTask}
                    visibleForm={this.state.visibleForm}
                    /*создать проспу для получения данных из form*/
                />}
                <Header/>
                <Body
                    toDoItems={this.state.toDoItems}
                    handleClick={this.openMenuClick}
                />
            </div>
        );


    }
}

export default App;