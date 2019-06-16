import React from 'react';

class Item extends React.Component{
    render() {
        return (
            <div className={'item'} onClick={this.props.visibleItemClick} style={{visibility: this.props.visibleItem}}>
                {this.props.valueItem}
            </div>);}
}

export default Item;