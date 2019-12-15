import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import { Button } from 'react-materialize';
import ElementCard from './ElementCard.js';
import Draggable from 'react-draggable';

class ElementProperty extends Component {
    state = {
        selectItem: this.props.property
    }

    render() {
        
        return (
            <div className="right-sidenav">
                <div className="right-sidenav-control-container">
                    <div>
                        <h6>
                            Properties
                        </h6>
                    </div>
                    <div>
                        <Button>
                            Submit
                        </Button>
                    </div>
                    <div>
                        <p><strong>Label: </strong></p>
                        <input type="text" defaultValue={this.state.selectItem.title}></input>
                    </div>
                    <div>
                        <p><strong>Background: </strong></p>
                        <p>Color picker</p>
                    </div>
                    <div>
                        <p><strong>Border Color: </strong></p>
                        <p>Color picker</p>
                    </div>
                    <div>
                        <p><strong>Border Thickness: </strong></p>
                        <input type="text"></input>
                    </div>
                    <div>
                        <p><strong>Border Radius:</strong></p>
                        <input type="text"></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default ElementProperty