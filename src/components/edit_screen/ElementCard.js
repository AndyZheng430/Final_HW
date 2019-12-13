import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import { Draggable } from 'react-draggable';

class ElementCard extends Component {

    render() {
        return(
            <div>
                container
            </div>
        )
    }
}

export default ElementCard;