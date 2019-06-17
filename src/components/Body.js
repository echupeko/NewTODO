import React from 'react';
import '../style/Body.css';
import Button from "./Button";
import ListItem from "./ListItem";

class Body extends React.Component {
    render() {
        const list = this.props.toDoItems;
        return (
            <div>
                <Button
                    handleClick={this.props.handleClick}
                    nameBtn='Open menu'
                />
                <Button
                    handleClick={this.props.removeTask}
                    nameBtn='Remove'
                />
                <div className={'itemRowTop'}>
                    <span>Name</span>
                    <span>Description</span>
                    <span>Importance</span>
                    <span>Date deadline</span>
                    <span>Date completed</span>
                </div>
                {list.length > 0 && list.map((item, index) => {
                    return <ListItem
                        key={index}
                        item={item}
                        checkingTask = {this.props.checkedTask}
                    />
                })}
            </div>
        );
    }
}

export default Body;