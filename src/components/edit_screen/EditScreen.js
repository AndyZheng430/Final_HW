import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import ElementList from './ElementList.js';
import ElementCard from './ElementCard.js';
import ElementProperty from './ElementProperty.js';
import Draggable from 'react-draggable';

class EditScreen extends Component {
    state = {
        itemArray: []
    }

    createContainer = (e) => {
        const item = this.state.itemArray;
        const title = 'container';
        item.push({title});
        this.setState({itemArray: item});
    }
    
    createLabel = (e) => {
        const item = this.state.itemArray;
        const title = 'label';
        item.push({title});
        this.setState({itemArray: item});
    }

    createButton = (e) => {
        const item = this.state.itemArray;
        const title = 'button';
        item.push({title});
        this.setState({itemArray: item});
    }

    createTextField = (e) => {
        const item = this.state.itemArray;
        const title = 'textfield';
        item.push({title});
        this.setState({itemArray: item});
    }

    render() {
        return (
            <div className="edit-screen-container">
                <div className="left-container">
                    <ElementList
                        createContainer={this.createContainer}
                        createLabel={this.createLabel}
                        createButton={this.createButton}
                        createTextField={this.createTextField}
                    />
                </div>
                <div className="right-container">
                    {this.state.itemArray.map((item) => {
                        return(
                            <Draggable>
                                <div className="draggable">
                                    <ElementCard controls={item}/>
                                </div>
                            </Draggable>
                        )
                    })}
                </div>
                <div>
                    <ElementProperty />
                </div>
            </div>
        )
    }
}

export default EditScreen