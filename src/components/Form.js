import React from 'react';
import '../style/Form.css';
import Button from './Button';
import Input from "./Input";

class Form extends React.Component {
    state = {
        importanceList: this.props.importanceList,
    };

    // pushTask = () => {
    //     this.setState({checkTask: false});
    //     const item = {
    //         checkTask: this.state.checkTask,
    //         titleTask: this.state.titleTask,
    //         descriptionTask: this.state.descriptionTask,
    //         importanceTask: this.state.importanceTask,
    //         dateDeadline: this.state.dateDeadLine,
    //         dateCompleted: this.state.dateComplited
    //     };
    //     let msgReturn = '';
    //     Object.keys(item).map((atrib) => {
    //             if (item[atrib] === '' || item[atrib] === undefined || item[atrib] === null) {
    //                 msgReturn += ' ' + atrib;
    //             }
    //         }
    //     );
    //     msgReturn && alert('Введите ' + msgReturn);
    //     this.props.addTask(item);
    // };
    //
    // getItem = (item) => {
    //     if (item != null) {
    //         Object.keys(item[0]).map((atrib) => {
    //             const stateObject = function () {//динамическое изменение стэйта
    //                 return {
    //                     [atrib]: item[0][atrib] || ''
    //                 };
    //             }.bind(item)();
    //             this.setState(stateObject);
    //         });
    //     }
    // }

    // giveChange = (event, value) => {
    //     const stateObject = function () {//динамическое изменение стэйта
    //         return {
    //             [value]: event.target.value || ''
    //         };
    //     }.bind(event)();
    //     this.setState(stateObject);
    //     return stateObject;
    // };

    closeForm = () => {
        this.props.closeMenu();
    }

    componentWillMount(){
        this.getItem(this.props.items);
    }

    render() {
        const inputElementList = this.props.inputElementList;
        const {visibleForm} = this.props;


        return (
            <div className={'backGr'} style={{visibility: visibleForm}} >
                <div className={'formTask'}>
                    {/*<input onChange={(event) => this.setState({titleTask:event.target.value})}*/}
                           {/*value={this.state.titleTask}>*/}
                    {/*</input>*/}

                    {/*<input onChange={(event) => this.setState({descriptionTask: event.target.value})}*/}
                           {/*value={this.state.descriptionTask}>*/}
                    {/*</input>*/}

                    {/*<input type='date' onChange={(event) => this.setState({dateDeadline: event.target.value})}*/}
                           {/*value={this.state.dateDeadline}>*/}
                    {/*</input>*/}

                    {/*<input type='date' onChange={(event) => this.setState({dateCompleted: event.target.value})}*/}
                           {/*value={this.state.dateCompleted}>*/}
                    {/*</input>*/}

                    {inputElementList.map((element, index) =>
                        <Input
                            setValueInput={this.setValue}
                            nameInput={element.nameInput}
                            typeInput={element.typeInput}
                            key={index}
                        />
                    )}

                    <select
                        onChange={(event) => this.setState({importanceTask: event.target[event.target.selectedIndex].label})}>
                        {this.props.importanceList.map((element, index) =>
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