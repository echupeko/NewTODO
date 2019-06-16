import React from 'react';
import Button from "./Button";
import ListItem from "./ListItem";

class Body extends React.Component {
    render() {
        const list = this.props.toDoItems;
        return (
            <div>
                {list.map((item, index) => {
                    return <ListItem
                        key={index}
                        item={item}
                    />
                })}

                <Button
                    handleClick = {this.props.handleClick}
                    nameBtn='Open menu'
                />
            </div>
        );
    }
}

export default Body;