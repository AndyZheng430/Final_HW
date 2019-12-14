import React, { Component } from 'react';

class CardItem extends Component {
    
    render() {
        const { WireFrame } = this.props;
        return (
            <div className="card z-depth-0 cardItem">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{WireFrame.userId}</span>
                </div>
            </div>
        );
    }
};

export default CardItem;