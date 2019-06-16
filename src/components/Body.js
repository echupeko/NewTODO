import React from 'react';
import '../style/Body.css';
import Button from "./Button";
import ListItem from "./ListItem";

class Body extends React.Component {
    render() {
        const list = this.props.toDoItems;
        return (
            <div>
                <Button style={{width: '100%'}}
                        handleClick={this.props.handleClick}
                        nameBtn='Open menu'
                />
                <div className={'itemRowTop'}>
                    <span>Name</span>
                    <span>Description</span>
                    <span>Importance</span>
                    <span>Date deadline</span>
                    <span>Date completed</span>
                </div>
                {list.map((item, index) => {
                    return <ListItem
                        key={index}
                        item={item}
                    />
                })}
            </div>
        );
    }
}

export default Body;