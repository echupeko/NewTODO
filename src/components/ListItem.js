import React from 'react';
import '../style/ListItem.css';

class ListItem extends React.Component {

    state = {
        checkTask: this.props.item.checkTask,
    }

    checkedTask = () => {
        this.setState({checkTask: !this.state.checkTask});
        this.props.checkingTask(this.props.item.idTask);
    }

    changedItem = () => {
        this.props.changingItem(this.props.item.idTask);
    }

    render() {
        return (
            <div className={'itemRow row'}  onDoubleClick={this.changedItem} >
                <span><input type={'checkbox'} onChange={this.checkedTask} checked={this.props.item.checkTask}></input></span>
                <span>{this.props.item.titleTask}</span>
                <span>{this.props.item.descriptionTask}</span>
                <span>{this.props.item.importanceTask}</span>
                <span>{this.props.item.dateDeadline}</span>
                <span>{this.props.item.dateCompleted}</span>
            </div>
        );
    }
}

export default ListItem;