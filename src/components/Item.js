import React from 'react';

class Item extends React.Component{
    render() {
        return (
            <div style={{display: 'flex'}}>
                {this.props.valueItem}
            </div>);}
}

export default Item;