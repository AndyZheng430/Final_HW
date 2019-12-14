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

class ElementList extends Component {

    render() {
        return (
            <div className="left-sidenav">
                <div className="left-sidenav-control-container">
                    <div className="left-sidenav-control-zoomIn">
                        <Button className="glyphicon">&#xe015;</Button>
                    </div>
                    <div className="left-sidenav-control-zoomOut">
                        <Button className="glyphicon">&#xe016;</Button>
                    </div>
                    <div className="left-sidenav-control-save">
                        <Button className="button-small">
                            save
                        </Button>
                    </div>
                    <div className="left-sidenav-control-close">
                        <Button className="button-small">
                            close
                        </Button>
                    </div>
                </div>
                <div className="left-sidenav-container-icon" onClick={() => this.props.createContainer()}>
                    Container
                </div>
                <div className="left-sidenav-label-icon" onClick={() => this.props.createLabel()}>
                    Label
                </div>
                <div className="left-sidenav-button-icon" onClick={() => this.props.createButton()}>
                    Button
                </div>
                <div className="left-sidenav-textfield-icon" onClick={() => this.props.createTextField()}>
                    Textfield
                </div>
            </div>
        )
    }
}

export default ElementList