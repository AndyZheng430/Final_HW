import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getFirestore } from 'redux-firestore';
import CardItem from './CardItem.js';

class CardList extends Component {

    extractWireFrame(id) {
        var userId = this.props.auth.uid;
        const fireStore = getFirestore();
        fireStore.collection('users').doc(userId).get().then(function(documentSnapshot){
            if (documentSnapshot.exists) {
                console.log(documentSnapshot.data()['wireframeId']);
                var id = documentSnapshot.data()['wireframeId'];
                return fireStore.collection('WireFrameList').doc(id);
            } else {
                console.log('FAILED');
            }
        });
    }

    getWireFrameId() {
        var userId = this.props.auth.uid;
        const fireStore = getFirestore();
        fireStore.collection('users').doc(userId).get().then(function(documentSnapshot){
            if (documentSnapshot.exists) {
                console.log(documentSnapshot.data()['wireframeId']);
                return documentSnapshot.data()['wireframeId'];
            } else {
                console.log('FAILED');
            }
        });
    }

    render() {
        const wfi = this.getWireFrameId();
        const WireFrameList = this.props.WireFrameList;
        console.log(WireFrameList);
        // const WireFrame = this.extractWireFrame(wfi);
        // console.log(WireFrame);
        // const newWireFrameList = this.extractWireFrame(WireFrameList, wfi);
        // console.log(newWireFrameList);
        return (
            <div className="WireFrameList section">
                {WireFrameList && WireFrameList.map(WireFrame => (
                    <Link to={'/editScreen/' + WireFrame.id} key={WireFrame.id}>
                        <CardItem WireFrame={WireFrame} />
                    </Link>
                ))} 
            </div>
        );
    }
}
    
    const mapStateToProps = (state) => {
        return {
            WireFrameList: state.firestore.ordered.WireFrameList,
            auth: state.firebase.auth,
        };
    };
    
    export default compose(connect(mapStateToProps))(CardList);
