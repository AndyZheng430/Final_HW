import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getFirestore } from 'redux-firestore';
import CardItem from './CardItem.js';
import { Button } from 'react-materialize';

class CardList extends Component {

    deleteWireFrame = (e, id) => {
        e.stopPropagation();
        const firestore = getFirestore();
        firestore.collection('todoLists').doc(id).delete();
    }

    render() {
        var currentUserId = this.props.auth.uid;
        const WireFrameList = this.props.WireFrameList;
        return (
            <div className="WireFrameList section">
                {WireFrameList && WireFrameList.filter(WireFrame => WireFrame.userId == currentUserId).map(WireFrame => (
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
