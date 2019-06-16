import React from 'react';

class ListItem extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.item.titleTask}</span>
            </div>
        );
    }
}

export default ListItem;
