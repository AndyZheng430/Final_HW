import React, { Component } from 'react';

class CardItem extends Component {
    
    render() {
        const { cardList } = this.props;

        <div className="card z-depth-0 cardItem">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{cardList.name}</span>
            </div>
        </div>
    }
};

export default CardItem;