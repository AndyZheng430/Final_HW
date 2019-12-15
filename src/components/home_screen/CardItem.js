import React, { Component } from 'react';
import Button from 'react-materialize/lib/Button';
import { getFirestore } from 'redux-firestore';

class CardItem extends Component {

    render() {
        const { WireFrame } = this.props;
        return (
            <div className="card z-depth-0 cardItem">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{WireFrame.Name}</span>
                </div>
            </div>
        );
    }
};

export default CardItem;