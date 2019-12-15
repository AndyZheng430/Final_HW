import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import ElementList from './ElementList.js';
import ElementCard from './ElementCard.js';
import ElementProperty from './ElementProperty.js';
import Draggable from 'react-draggable';
import { Button } from 'react-materialize';
import { SketchPicker } from 'react-color';


class EditScreen extends Component {
    state = {
        itemArray: [],
        selectItem: null
    }

    createContainer = (e) => {
        const item = this.state.itemArray;
        const title = 'container';
        item.push({title});
        this.setState({itemArray: item});
        console.log(this.state.itemArray);
    }
    
    createLabel = (e) => {
        const item = this.state.itemArray;
        const title = 'label';
        item.push({title});
        this.setState({itemArray: item});
        console.log(this.state.itemArray);
    }

    createButton = (e) => {
        const item = this.state.itemArray;
        const title = 'button';
        item.push({title});
        this.setState({itemArray: item});
        console.log(this.state.itemArray);
    }

    createTextField = (e) => {
        const item = this.state.itemArray;
        const title = 'textfield';
        item.push({title});
        this.setState({itemArray: item});
        console.log(this.state.itemArray);
    }

    openProperty = (item, e) => {
        e.stopPropagation();
        console.log(item);
        this.state.selectItem = item;
        document.getElementById("label-textfield").defaultValue = this.getTitle();
        // console.log(this.state.selectItem["background-color"]);
        // document.getElementById("backgroundcolor-picker").defaultValue = this.getBackgroundColor();
    }

    getTitle() {
        if(this.state.selectItem == null)
            return "";
        return this.state.selectItem.title;
    }
    // getBackgroundColor() {
    //     if(this.state.selectItem == null)
    //         return "";
    //     return this.state.selectItem["background-color"];
    // }

    render() {
        const auth = this.props.auth;
        const WireFrameList = this.props.wireframes;
        if (!WireFrameList)
            return <React.Fragment />
        if (!auth.uid) {
            return <Redirect to="/" />;
        }
        var listItem = WireFrameList.wireframelists;
        console.log(listItem);
        return (
            <div className="edit-screen-container">
                <div className="left-container">
                    <ElementList
                        createContainer={this.createContainer}
                        createLabel={this.createLabel}
                        createButton={this.createButton}
                        createTextField={this.createTextField}
                    />
                </div>
                <div className="right-container">
                    {listItem.map(element => {
                        return(
                            <Draggable>
                                <div className="draggable" 
                                    onClick={this.openProperty.bind(this, element)}>
                                    <ElementCard 
                                        controls={element}
                                    />
                                </div>
                            </Draggable>
                        )
                    })}
                    {this.state.itemArray.map((item) => {
                        return(
                            <Draggable>
                                <div className="draggable">
                                    <ElementCard controls={item}/>
                                </div>
                            </Draggable>
                        )
                    })}
                </div>
                <div>
                    <div className="right-sidenav">
                        <div className="right-sidenav-control-container">
                            <div>
                                <h6>
                                    Properties
                                </h6>
                            </div>
                            <div>
                                <Button>
                                    Submit
                                </Button>
                            </div>
                            <div>
                                <p><strong>Label: </strong></p>
                                <input type="text" id="label-textfield" defaultValue={this.getTitle()} />
                            </div>
                            <div>
                                <p><strong>Background: </strong></p>
                                <SketchPicker id="backgroundcolor-picker" defaultValue={this.getBackgroundColor()}/>
                            </div>
                            <div>
                                <p><strong>Border Color: </strong></p>
                                <p>Color picker</p>
                            </div>
                            <div>
                                <p><strong>Border Thickness: </strong></p>
                                <input type="text"></input>
                            </div>
                            <div>
                                <p><strong>Border Radius:</strong></p>
                                <input type="text"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    const { WireFrameList } = state.firestore.data;
    const wireframes = WireFrameList ? WireFrameList[id] : null;

    if (wireframes) 
        wireframes.id = id;

    return {
        wireframes,
        auth: state.firebase.auth,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'WireFrameList' },
    ]),
)(EditScreen);