import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import ElementList from './ElementList.js';
import ElementCard from './ElementCard.js';
import Draggable from 'react-draggable';

class EditScreen extends Component {
    state = {
        itemArray: []
    }

    createContainer = (e) => {
        console.log("clicked");
        console.log(this.state);
        const item = this.state.itemArray;
        const title = '0';
        item.push({title});
        this.setState({itemArray: item});
    }
    
    render() {
        return (
            <div className="edit-screen-container">
                <div className="left-container">
                    <ElementList
                        createContainer={this.createContainer}
                    />
                </div>
                <div className="right-container">
                    {this.state.itemArray.map((item) => {
                        return(
                            <Draggable>
                                <div>
                                    <ElementCard />
                                </div>
                            </Draggable>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default EditScreen