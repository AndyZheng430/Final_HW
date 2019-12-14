import React from 'react'
import { connect } from 'react-redux';
import dataTest from './dataTest.json';
import { getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';

class DatabaseTester extends React.Component {

    // NOTE, BY KEEPING THE DATABASE PUBLIC YOU CAN
    // DO THIS ANY TIME YOU LIKE WITHOUT HAVING
    // TO LOG IN
    handleClear = () => {
        const fireStore = getFirestore();
        fireStore.collection('users').get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc) {
                console.log("deleting users " + doc.id);
                fireStore.collection('users').doc(doc.id).delete();
            })
        });
        fireStore.collection('WireFrameList').get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc) {
                console.log("deleting wireframe " + doc.id);
                fireStore.collection('WireFrameList').doc(doc.id).delete();
            })
        });
    }
    
    handleClearWireFrame = () => {
        const fireStore = getFirestore();
        fireStore.collection('WireFrameList').get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc) {
                console.log("deleting wireframe " + doc.id);
                fireStore.collection('WireFrameList').doc(doc.id).delete();
            })
        });
    }

    handleResetWireFrame = () => {
        const fireStore = getFirestore();
        dataTest.WireFrameList.forEach(wireframe => {
            fireStore.collection('WireFrameList').add({
                wireframelists: wireframe.wireframes,
                userId: wireframe.userId,
                Name: wireframe.Name,
                Time: wireframe.Time,
            }).then(() => {
                console.log("WIREFRAME DATABASE RESET");
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    handleReset = () => {
        const fireStore = getFirestore();
        dataTest.Users.forEach(userInfo => {
            fireStore.collection('users').add({
                    firstName: userInfo.firstName,
                    initial: userInfo.initial,
                    lastName: userInfo.lastName,
                    userId: userInfo.userId,
                }).then(() => {
                    console.log("USER DATABASE RESET");
                }).catch((err) => {
                    console.log(err);
                });
        });
        dataTest.WireFrameList.forEach(wireframe => {
            fireStore.collection('WireFrameList').add({
                wireframelists: wireframe.wireframes,
                userId: wireframe.userId,
                Name: wireframe.Name,
                Time: wireframe.Time
            }).then(() => {
                console.log("WIREFRAME DATABASE RESET");
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    handleGetWireFrameId = () => {
        var firebase = getFirebase();
        var user = firebase.auth().currentUser.uid;
        console.log(user);
    }

    handleGetWireFrame = () => {
        var firebase = getFirebase();
        var user = firebase.auth().currentUser.uid;
        const fireStore = getFirestore();
        var wireframes = fireStore.collection('WireFrameList').get().then(function(documentSnapshot){
            if (documentSnapshot.exists && documentSnapshot.data()['userId'] == user) {
                var data = documentSnapshot.data()['wireframe'];
                console.log(data);
            } else {
                console.log('document not found');
            }
        });
    }

    handleAddToWireFrame = () => {
        var firebase = getFirebase();
        var user = firebase.auth().currentUser.uid;
        const fireStore = getFirestore();
        fireStore.collection('WireFrameList').get().then(function(documentSnapshot){
            if (documentSnapshot.exists && documentSnapshot.data()['userId'] == user) {
                var data = documentSnapshot.data()['wireframe'];
                data.push({name: "bob"});
                documentSnapshot.data()['wireframe'].set({wireframe: data});
                console.log(data);
            }
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClear}>Clear  Database</button>
                <button onClick={this.handleReset}>Reset Database</button>
                <button onClick={this.handleClearWireFrame}>Clear WireFrame Database </button>
                <button onClick={this.handleResetWireFrame}>Reset WireFrame Database </button>
                <button onClick={this.handleGetWireFrameId}>Check User WireFrame Id</button>
                <button onClick={this.handleGetWireFrame}>Check User WireFrame</button>
                <button onClick={this.handleAddToWireFrame}> Add to wireframe field</button>
            </div>
            )
    }
}

const mapStateToProps = function (state) {
    return {
        auth: state.firebase.auth,
        firebase: state.firebase
    };
}

export default connect(mapStateToProps)(DatabaseTester);