import React from 'react';
import Item from "./Item";

class ListItem extends React.Component {
    render() {
        return (
            <div style={{flexDirection: 'column'}}>
                {this.props.listItem.map((element,index) =>
                    Object.keys(element).map((atribute) =>
                    <Item
                        valueItem = {element[atribute]}
                        key = {index}
                    />)
                )}

            </div>
        );
    }
}

export default ListItem;