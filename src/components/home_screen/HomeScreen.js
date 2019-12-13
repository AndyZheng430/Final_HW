import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import { Button } from 'react-materialize';
import CardList from './CardList.js';

class HomeScreen extends Component {
    state = {
        wireframeid: null,
    }

    handleNewList = () => {
        const firestore = getFirestore();
    }

    render() {
        if (!this.props.auth.uid) {
            return <Redirect to="/login" />;
        }

        return (
            <div>
                <div className="left-homescreen-container">
                    <CardList/>
                </div>
                <div className="right-homescreen-container">
                    <div className="right-homescreen-title">
                        <h1>
                            WireFrame
                        </h1>
                    </div>
                    <Button className="create-wireframe">
                        Create New WireFrame
                    </Button>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'WireFrameList' },
    ]),
)(HomeScreen);