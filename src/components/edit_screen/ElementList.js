import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import { Button } from 'react-materialize';

class ElementList extends Component {
    
    render() {
        return (
            <div className="left-sidenav">
                <div className="left-sidenav-control-container">
                    <div className="left-sidenav-control-zoomIn">
                        <span className="glyphicon">&#xe015;</span>
                    </div>
                    <div className="left-sidenav-control-zoomOut">
                        <span className="glyphicon">&#xe016;</span>
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
                <div className="left-sidenav-container-icon">
                    Container
                </div>
                <div className="left-sidenav-label-icon">
                    Label
                </div>
                <div className="left-sidenav-button-icon">
                    Button
                </div>
                <div className="left-sidenav-textfield-icon">
                    Textfield
                </div>
            </div>
        )
    }
}

export default ElementList