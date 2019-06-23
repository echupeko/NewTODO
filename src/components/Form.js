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
        if(Object.keys(this.state.itemTask).length !== 0)
            this.props.addTask(this.state.itemTask);
        else
            alert('Введите данные задачи');
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
                           value={this.state.itemTask.titleTask} defaultValue={'Название'}>
                    </input>

                    <input onChange={(event) => this.pushProperty('descriptionTask', event.target.value)}
                           value={this.state.itemTask.descriptionTask} defaultValue={'Описание'}>
                    </input>

                    <input type='date' onChange={(event) => this.pushProperty('dateDeadline', event.target.value)}
                           value={this.state.itemTask.dateDeadline} defaultValue={new Date().toLocaleDateString('ru-RU')}>
                    </input>

                    <input type='date' onChange={(event) => this.pushProperty('dateCompleted', event.target.value)}
                           value={this.state.itemTask.dateCompleted && new Date().toLocaleDateString('ru-RU')}>
                    </input>

                    <select
                        defaultValue={'Обычная'}
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

Form.defaultProps = {
    itemTask: {
        titleTask: 'Название',
        descriptionTask: 'Описание',
        importanceTask: 'Обычная',
        dateDeadline: new Date().toLocaleDateString('ru-RU'),
        dateCompleted: new Date().toLocaleDateString('ru-RU')
    }
}

export default Form;