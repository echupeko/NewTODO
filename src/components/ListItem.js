import React from 'react';

class ListItem extends React.Component {
    render() {
        return (
            <div className={'itemRow'}>
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