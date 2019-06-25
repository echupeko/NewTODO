import React from 'react';
import '../style/Body.css';
import Button from "./Button";
import ListItem from "./ListItem";

class Body extends React.Component {
    render() {
        const list = this.props.toDoItems;
        return (
            <div className="bodyBlock">
                <Button
                    handleClick={this.props.handleClick}
                    nameBtn='Добавить задачу'
                />
                <Button
                    handleClick={this.props.removeTask}
                    nameBtn='Удалить'
                />
                <div className={'itemRow RowTop'}>
                    <span></span>
                    <span>Название</span>
                    <span>Описание</span>
                    <span>Важность</span>
                    <span>Срок выполнения</span>
                    <span>Дата выполнения</span>
                </div>
                {list.length > 0 && list.map((item, index) => {
                    return <ListItem
                        key={index}
                        item={item}
                        changingItem = {this.props.changedItem}
                        checkingTask = {this.props.checkedTask}
                    />
                })}
            </div>
        );
    }
}

export default Body;