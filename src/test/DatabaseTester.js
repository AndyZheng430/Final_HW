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

    handleReset = () => {
        const fireStore = getFirestore();
        var list = [];
        dataTest.Users.forEach(userInfo => {
            list.push(userInfo.wireframeId);
            fireStore.collection('users').add({
                    firstName: userInfo.firstName,
                    initial: userInfo.initial,
                    lastName: userInfo.lastName,
                    wireframeId: userInfo.wireframeId,
                }).then(() => {
                    console.log("USER DATABASE RESET");
                }).catch((err) => {
                    console.log(err);
                });
        });
        dataTest.WireFrameList.forEach(wireframe => {
            var lisElement = list.splice(0,1)[0];
            console.log(lisElement);
            fireStore.collection('WireFrameList').doc(lisElement).set({
                wireframelists: wireframe.wireframes,
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
        fireStore.collection('users').doc(user).get().then(function(documentSnapshot){
            if (documentSnapshot.exists) {
                console.log(documentSnapshot.data()['wireframeId']);
                var wireframeid = documentSnapshot.data()['wireframeId'];
            } else {
                console.log('FAILED');
            }
            var wireframes = fireStore.collection('WireFrameList').doc(wireframeid);
            wireframes.get().then(function(documentSnapshot){
                if (documentSnapshot.exists) {
                    var data = documentSnapshot.data()['wireframe'];
                    console.log(data);
                } else {
                    console.log('document not found');
                }
            })
        });
    }

    handleGetWireFrameCollections = () => {
        var firebase = getFirebase();
        var user = firebase.auth().currentUser.uid;
        var fireStore = getFirestore();
        fireStore.collection('users').doc(user).get().then(function(documentSnapshot){
            if (documentSnapshot.exists) {
                console.log(documentSnapshot.data()['wireframeId']);
                var wireframeid = documentSnapshot.data()['wireframeId'];
            } else {
                console.log('FAILED');
            }
            var wireframes = fireStore.collection('WireFrameList').doc(wireframeid);
            wireframes.get().then(function(documentSnapshot){
                if (documentSnapshot.exists) {
                    var data = documentSnapshot.data()['wireframe'];
                    console.log(data);
                } else {
                    console.log('document not found');
                }
            })
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClear}>Clear  Database</button>
                <button onClick={this.handleReset}>Reset Database</button>
                <button onClick={this.handleGetWireFrameId}>Check User WireFrame Id</button>
                <button onClick={this.handleGetWireFrame}>Check User WireFrame</button>
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