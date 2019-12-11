import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import ElementList from './ElementList.js';

class EditScreen extends Component {

    render() {
        return (
            <div>
                <div className="left">
                    <ElementList />
                </div>
            </div>
        )
    }
}

export default EditScreen