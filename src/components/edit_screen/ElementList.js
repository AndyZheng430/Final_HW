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
                <div >
                    <h6>Title:</h6>
                    <input id="title-textfield" type="text" defaultValue={this.props.Name}/>
                </div>
                <div className="left-sidenav-control-container">
                    <div className="left-sidenav-control-zoomIn">
                        <Button className="glyphicon" onClick={this.props.zoomIn}>&#xe015;</Button>
                    </div>
                    <div className="left-sidenav-control-zoomOut">
                        <Button className="glyphicon" onClick={this.props.zoomOut}>&#xe016;</Button>
                    </div>
                    <div className="left-sidenav-control-save">
                        <Button className="button-small" onClick={this.props.saveAll}>
                            save
                        </Button>
                    </div>
                    <div className="left-sidenav-control-close">
                        <Button className="button-small" onClick={this.props.cancelAll}>
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