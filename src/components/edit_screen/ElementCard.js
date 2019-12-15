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
                        top: controls.Y,
                        left: controls.X,
                        backgroundColor: controls.backgroundColor, 
                        width: controls.sizeX,
                        height: controls.sizeY,
                        borderWidth: controls.borderThickness,
                        borderStyle: "solid",
                        borderColor: controls.borderColor,
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
                        top: controls.Y,
                        left: controls.X,
                        backgroundColor: controls.backgroundColor, 
                        fontSize: controls.fontSize, 
                        color: controls.textColor,
                        width: controls.sizeX,
                        height: controls.sizeY,
                        borderWidth: controls.borderThickness,
                        borderStyle: "solid",
                        borderColor: controls.borderColor,
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
                        top: controls.Y,
                        left: controls.X,
                        backgroundColor: controls.backgroundColor, 
                        fontSize: controls.fontSize, 
                        color: controls.textColor,
                        width: controls.sizeX,
                        height: controls.sizeY,
                        borderWidth: controls.borderThickness,
                        borderStyle: "solid",
                        borderColor: controls.borderColor,
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
                        top: controls.Y,
                        left: controls.X,
                        backgroundColor: controls.backgroundColor, 
                        fontSize: controls.fontSize, 
                        color: controls.textColor,
                        width: controls.sizeX,
                        height: controls.sizeY,
                        borderWidth: controls.borderThickness,
                        borderStyle: "solid",
                        borderColor: controls.borderColor,
                        borderRadius: controls.borderRadius,
                    }}
                    placeholder="Text Field"
                    />
                )
            }
        }
    }
}

export default ElementCard;