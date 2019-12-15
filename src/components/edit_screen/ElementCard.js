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
                    <div className="draggable-container"
                    style={{
                        backgroundColor: controls.backgroundColor, 
                        width: controls.sizeX,
                        height: controls.sizeY,
                        borderWidth: controls.borderThickness,
                        borderStyle: "solid",
                        borderColor: "black",
                        borderRadius: controls.borderRadius,
                    }}
                    >
                    </div>
                )
            }
            else if (controls.title == 'label') {
                return(
                    <label className="draggable-label"
                    style={{
                        backgroundColor: controls.backgroundColor, 
                        fontSize: controls.fontSize, 
                        color: controls.textColor,
                        width: controls.sizeX,
                        height: controls.sizeY,
                        borderWidth: controls.borderThickness,
                        borderStyle: "solid",
                        borderColor: "black",
                        borderRadius: controls.borderRadius,
                    }}>
                        {controls.text}
                    </label>
                )
            }
            else if (controls.title == 'button') {
                return(
                    <button className="draggable-button"
                    style={{
                        backgroundColor: controls.backgroundColor, 
                        fontSize: controls.fontSize, 
                        color: controls.textColor,
                        width: controls.sizeX,
                        height: controls.sizeY,
                        borderWidth: controls.borderThickness,
                        borderStyle: "solid",
                        borderColor: "black",
                        borderRadius: controls.borderRadius,
                    }}
                    >
                        {controls.text}
                    </button>
                )
            }
            else if (controls.title == 'textfield') {
                return(
                    <input type="text" className="draggable-textfield"
                    style={{
                        backgroundColor: controls.backgroundColor, 
                        fontSize: controls.fontSize, 
                        color: controls.textColor,
                        width: controls.sizeX,
                        height: controls.sizeY,
                        borderWidth: controls.borderThickness,
                        borderStyle: "solid",
                        borderColor: "black",
                        borderRadius: controls.borderRadius,
                    }}
                    />
                )
            }
        }
    }
}

export default ElementCard;