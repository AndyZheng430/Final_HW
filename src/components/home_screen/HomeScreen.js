import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import { Button } from 'react-materialize';
import CardList from './CardList.js';

class HomeScreen extends Component {

    handleNewList = () => {
        const firestore = getFirestore();
        firestore.collection('WireFrameList').add({
            userId: this.props.auth.uid,
            wireframlists: [],
            Name: "Unknown",
            Time: Date.now()
        }).then(docRef => {
            window.location.href ="/editScreen/" + docRef.id;
            window.location.replace("/editScreen/" + docRef.id);
        })

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
                    <Button className="create-wireframe" onClick={this.handleNewList}>
                        Create New WireFrame
                    </Button>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        WireFrameList: state.firestore.ordered.WireFrameList,
        auth: state.firebase.auth,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'WireFrameList' },
    ]),
)(HomeScreen);