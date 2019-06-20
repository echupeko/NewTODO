import React from 'react';
import '../style/Form.css';
import Button from './Button';


class Form extends React.Component {

    state = {
        importanceList: this.props.importanceList,
        itemTask: this.props.itemTask
    };

    pushProperty = (element, value) => {
        let {itemTask} = this.state;
        itemTask[element] = value;
    }

    addTask = () => {
        this.props.addTask(this.state.itemTask);
    }

    closeForm = () => {
        this.props.closeForm();
    }

    componentWillMount() {//выполняется перед рендером
    }

    render() {
        const {visibleForm} = this.props;
        return (
            <div className={'backGr'} style={{visibility: visibleForm}}>
                <div className={'formTask'}>
                    <input onChange={(event) => this.pushProperty('titleTask', event.target.value)}
                           value={this.state.itemTask.titleTask}>
                    </input>

                    <input onChange={(event) => this.pushProperty('descriptionTask', event.target.value)}
                           value={this.state.itemTask.descriptionTask}>
                    </input>

                    <input type='date' onChange={(event) => this.pushProperty('dateDeadline', event.target.value)}
                           value={this.state.itemTask.dateDeadline}>
                    </input>

                    <input type='date' onChange={(event) => this.pushProperty('dateCompleted', event.target.value)}
                           value={this.state.itemTask.dateCompleted}>
                    </input>

                    <select
                        onChange={(event) => this.pushProperty('importanceTask', event.target[event.target.selectedIndex].label)}>
                        {this.state.importanceList.map((element, index) =>
                            <option
                                value={this.state.itemTask.importanceTask}
                                key={index}>
                                {element}
                            </option>
                        )}
                    </select>
                    <Button
                        handleClick={this.addTask}
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

// Form.defaultProps = {
//     itemTask: {
//         titleTask: 'Название',
//         descriptionTask: 'Описание',
//         importanceTask: 'Обычная',
//         dateDeadline: new Date().toLocaleDateString('ru-RU'),
//         dateCompleted: new Date().toLocaleDateString('ru-RU')
//     }
// }

export default Form;