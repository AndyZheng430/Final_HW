import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';

class HomeScreen extends Component {
    state = {

    }
    handleNewList = () => {
        const firestore = getFirestore();

    }

    render() {
        // if (!this.props.auth.uid) {
        //     return <Redirect to="/login" />;
        // }

        return (
            <div>
                <div className="left">
                    {/* CardList */}
                </div>
                <div className="right">
                    <div className="right-container">
                        <h1>
                            WireFrame
                        </h1>
                    </div>
                    <a className="waves-effect waves-light btn">
                        Create New WireFrame
                    </a>
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