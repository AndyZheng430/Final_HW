import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import { Draggable } from 'react-draggable';

class ElementCard extends Component {

    render() {
        const { controls } = this.props;
        {
            if (controls.title == 'container') {
                return(
                    <div className="draggable-container">
                        container
                    </div>
                )
            }
            else if (controls.title == 'label') {
                return(
                    <div className="draggable-label">
                        label
                    </div>
                )
            }
            else if (controls.title == 'button') {
                return(
                    <div className="draggable-button">
                        button
                    </div>
                )
            }
            else if (controls.title == 'textfield') {
                return(
                    <div className="draggable-textfield">
                        textfield
                    </div>
                )
            }
        }
    }
}

export default ElementCard;