import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import ElementList from './ElementList.js';
import ElementCard from './ElementCard.js';
import Draggable from 'react-draggable';
import { Button } from 'react-materialize';
import { SketchPicker } from 'react-color';


class EditScreen extends Component {
    state = {
        Name: "", 
        Time: null,
        userId: null,
        scale: 1,
        itemArray: [],
        selectItem: {
            key: -1,
            id: -1,
            title: "",
            X: 0,
            Y: 0,
            sizeX: 0,
            sizeY: 0,
            text: "",                            
            textColor: "",
            fontSize: 0,
            backgroundColor: "#ffffff",
            borderColor: "#000000",
            borderThickness: 1,
            borderRadius: 0
        },
    }

    saveAll = (e) => {
        const fireStore = getFirestore();
        console.log(this.props.wireframes.id);
        fireStore.collection('WireFrameList').doc(this.props.wireframes.id).set({
            Name: document.getElementById("title-textfield").value,
            Time: Date.now(),
            userId: this.state.userId,
            wireframelists: this.state.itemArray
        });
    }

    // reset and redirect to homescreen
    cancelAll = (e) => {
        this.setState({
            Name: "", 
            Time: null,
            userId: null,
            itemArray: [], 
            selectItem: {
                key: -1,
                id: -1,
                title: "",
                X: 0,
                Y: 0,
                sizeX: 0,
                sizeY: 0,
                text: "",                            
                textColor: "",
                fontSize: 0,
                backgroundColor: "#ffffff",
                borderColor: "#000000",
                borderThickness: 1,
                borderRadius: 0
            },
            scale: 1,
        });
        window.location.href = "/";
        window.location.replace("/");
    }

    createContainer = (e) => {
        const item = this.state.itemArray;
        const itemlength = item.length;
        item.push({
            key: itemlength,
            id: itemlength,
            title: "container",
            X: 0,
            Y: 0,
            sizeX: 100,
            sizeY: 100,
            text: "",                            
            textColor: "",
            fontSize: 0,
            backgroundColor: "",
            borderColor: "#000000",
            borderThickness: 2,
            borderRadius: 0
        });
        this.setState({itemArray: item});
        console.log(this.state.itemArray);
    }
    
    createLabel = (e) => {
        const item = this.state.itemArray;
        const itemlength = item.length;
        item.push({
            key: itemlength,
            id: itemlength,
            title: "label",
            X: 0,
            Y: 0,
            sizeX: 100,
            sizeY: 20,
            text: "Unknown",                            
            textColor: "#000000",
            fontSize: 12,
            backgroundColor: "#ffffff",
            borderColor: "#000000",
            borderThickness: 1,
            borderRadius: 0
        });
        this.setState({itemArray: item});
        console.log(this.state.itemArray);
    }

    createButton = (e) => {
        const item = this.state.itemArray;
        const itemlength = item.length;
        item.push({
            key: itemlength,
            id: itemlength,
            title: "button",
            X: 0,
            Y: 0,
            sizeX: 100,
            sizeY: 20,
            text: "Unknown",                            
            textColor: "#000000",
            fontSize: 12,
            backgroundColor: "#ffffff",
            borderColor: "#000000",
            borderThickness: 1,
            borderRadius: 0
        });
        this.setState({itemArray: item});
        console.log(this.state.itemArray);
    }

    createTextField = (e) => {
        const item = this.state.itemArray;
        const itemlength = item.length;
        item.push({
            key: itemlength,
            id: itemlength,
            title: "textfield",
            X: 0,
            Y: 0,
            sizeX: 100,
            sizeY: 20,
            text: "Empty TextField",                            
            textColor: "#000000",
            fontSize: 12,
            backgroundColor: "#ffffff",
            borderColor: "#000000",
            borderThickness: 1,
            borderRadius: 0
        });
        this.setState({itemArray: item});
        console.log(this.state.itemArray);
    }

    openProperty = (item, e) => {
        e.stopPropagation();
        this.setState({selectItem: {
            key: -1,
            id: -1,
            title: "",
            X: 0,
            Y: 0,
            sizeX: 0,
            sizeY: 0,
            text: "",                            
            textColor: "",
            fontSize: 0,
            backgroundColor: "#ffffff",
            borderColor: "#000000",
            borderThickness: 2,
            borderRadius: 0
        }});
        if (item == null) {
            console.log("null");
        }
        else if (item == undefined) {
            console.log("undef");
        } else {
        document.getElementById("label-textfield").value = item.text;
        document.getElementById("font-size-textfield").value = item.fontSize;
        document.getElementById("border-thickness").value = item.borderThickness;
        document.getElementById("border-radius").value = item.borderRadius;
        this.setState({selectItem: item});
        console.log(this.state.selectItem);
        }
    }
    handleChangeFontSize = (size) => {
        var obj = {
            key: this.state.selectItem.key,
            id: this.state.selectItem.id,
            title: this.state.selectItem.title,
            X: this.state.selectItem.X,
            Y: this.state.selectItem.Y,
            sizeX: this.state.selectItem.sizeX,
            sizeY: this.state.selectItem.sizeY,
            text: this.state.selectItem.text,                            
            textColor: this.state.selectItem.textColor,
            fontSize: document.getElementById("font-size-textfield").value,
            backgroundColor: this.state.selectItem.backgroundColor,
            borderColor: this.state.selectItem.borderColor,
            borderThickness: this.state.selectItem.borderThickness,
            borderRadius: this.state.selectItem.borderRadius
        }
        // var itemArray = this.state.itemArray;
        // itemArray[itemId] = item;
        this.setState({selectItem: obj});
    }
    handleChangeBackground = (color) => {
        var obj = {
            key: this.state.selectItem.key,
            id: this.state.selectItem.id,
            title: this.state.selectItem.title,
            X: this.state.selectItem.X,
            Y: this.state.selectItem.Y,
            sizeX: this.state.selectItem.sizeX,
            sizeY: this.state.selectItem.sizeY,
            text: this.state.selectItem.text,                            
            textColor: this.state.selectItem.textColor,
            fontSize: this.state.selectItem.fontSize,
            backgroundColor: color.hex,
            borderColor: this.state.selectItem.borderColor,
            borderThickness: this.state.selectItem.borderThickness,
            borderRadius: this.state.selectItem.borderRadius
        }
        this.setState({selectItem: obj});
    }

    handleChangeBorderColor = (color) => {
        var obj = {
            key: this.state.selectItem.key,
            id: this.state.selectItem.id,
            title: this.state.selectItem.title,
            X: this.state.selectItem.X,
            Y: this.state.selectItem.Y,
            sizeX: this.state.selectItem.sizeX,
            sizeY: this.state.selectItem.sizeY,
            text: this.state.selectItem.text,                            
            textColor: this.state.selectItem.textColor,
            fontSize: this.state.selectItem.fontSize,
            backgroundColor: this.state.selectItem.backgroundColor,
            borderColor: color.hex,
            borderThickness: this.state.selectItem.borderThickness,
            borderRadius: this.state.selectItem.borderRadius
        }
        this.setState({selectItem: obj});
        console.log(this.state.selectItem);
    }

    submitChange = (e) => {
        var item = this.state.selectItem;
        var itemId = this.state.selectItem.id;
        if (itemId != -1) {
            var itemArray = this.state.itemArray;
            item.text = document.getElementById("label-textfield").value;
            item.fontSize = document.getElementById("font-size-textfield").value;
            item.borderThickness = document.getElementById("border-thickness").value;
            item.borderRadius = document.getElementById("border-radius").value;
            itemArray[itemId] = item;
            this.setState({itemArray: itemArray, selectItem: item});
            console.log(this.state.selectItem);
        }
    }
    
    detectKeyPress = (e) => {
        if(e.key == 'Delete') {
            if(this.state.selectItem.id != -1) {
                var itemId = this.state.selectItem.id;
                var itemArray = this.state.itemArray;
                itemArray.splice(itemId, 1);
                for (var i = 0; i < itemArray.length; i++) {
                    itemArray[i].id = i;
                    itemArray[i].key = i;
                }
                this.setState({itemArray: itemArray, selectItem: {
                    key: -1,
                    id: -1,
                    title: "",
                    X: 0,
                    Y: 0,
                    sizeX: 0,
                    sizeY: 0,
                    text: "",                            
                    textColor: "",
                    fontSize: 0,
                    backgroundColor: "#ffffff",
                    borderColor: "#000000",
                    borderThickness: 1,
                    borderRadius: 0
                }});
            }
        } else if (e.key == "d" && e.ctrlKey) {
            console.log("duplicating");
            if(this.state.selectItem.id != -1) {
                var item = this.state.selectItem;
                var itemId = this.state.selectItem.id;
                var itemArray = this.state.itemArray;
                itemArray.push(item);
                for (var i = 0; i < itemArray.length; i++) {
                    itemArray[i].id = i;
                    itemArray[i].key = i;
                }
                this.setState({itemArray: itemArray, selectItem: item});
            }
        }
    }

    onStart = () => {
        this.setState({activeDrags: ++this.state.activeDrags});
    };

    onStop = () => {
        this.setState({activeDrags: --this.state.activeDrags});
    };

    zoomIn = () => {
        var scale = this.state.scale * 1.25;
        this.setState({scale: scale});
        console.log(this.state);
        var draggables = document.getElementsByClassName("draggable");
        for (var i = 0; i < draggables.length; i++) {
            draggables[i].style.transform = "scale("+scale+")";
        }
    }
    zoomOut = () => {
        var scale = this.state.scale / 1.25;
        this.setState({scale: scale});
        console.log(this.state);
        var draggables = document.getElementsByClassName("draggable");
        for (var i = 0; i < draggables.length; i++) {
            draggables[i].style.transform = "scale("+scale+")";
        }
    }

    render() {
        document.body.addEventListener("keydown", this.detectKeyPress);
        const auth = this.props.auth;
        const WireFrameList = this.props.wireframes;
        if (!WireFrameList)
            return <React.Fragment />
        if (!auth.uid) {
            return <Redirect to="/" />;
        }
        this.state.userId = WireFrameList.userId;
        this.state.Name = WireFrameList.Name;
        this.state.Time = WireFrameList.Time;
        var listItem = WireFrameList.wireframelists;
        if (this.state.itemArray.length <= 0 && listItem != null) {
            listItem.map(element => {this.state.itemArray.push(element)});
        }
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        return (
            <div className="edit-screen-container">
                <div className="left-container">
                    <ElementList
                        Name={this.state.Name}
                        createContainer={this.createContainer}
                        createLabel={this.createLabel}
                        createButton={this.createButton}
                        createTextField={this.createTextField}
                        saveAll={this.saveAll}
                        cancelAll={this.cancelAll}
                        zoomIn={this.zoomIn}
                        zoomOut={this.zoomOut}
                    />
                </div>
                <div className="right-container">
                    {this.state.itemArray.map((item) => {
                        return(
                            <Draggable bounds={"parent"} {...dragHandlers} >
                                <div style={{width: item.sizeX, height: item.sizeY, fontSize: item.fontSize}}
                                    onClick={this.openProperty.bind(this, item)} 
                                    className="draggable">
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
                                <Button onClick={ (e) => this.submitChange() }>
                                    Submit
                                </Button>
                            </div>
                            <div className="propertyCard">
                                <p><strong>Label: </strong></p>
                                <input type="text" id="label-textfield"/>
                            </div>
                            <div className="propertyCard">
                                <p><strong>Font Size: </strong></p>
                                <input type="text" id="font-size-textfield"
                                    onChange={this.handleChangeFontSize.bind(this)}
                                />
                            </div>
                            <div className="propertyCard">
                                <p><strong>Background: </strong></p>
                                <SketchPicker id="backgroundcolor-picker" 
                                color={ this.state.selectItem.backgroundColor}
                                onChangeComplete={ this.handleChangeBackground }
                                />
                            </div>
                            <div className="propertyCard">
                                <p><strong>Border Color: </strong></p>
                                <SketchPicker id="border-picker" 
                                color={ this.state.selectItem.borderColor}
                                onChangeComplete={ this.handleChangeBorderColor }
                                />
                            </div>
                            <div className="propertyCard">
                                <p><strong>Border Thickness: </strong></p>
                                <input type="text" id="border-thickness"></input>
                            </div>
                            <div className="propertyCard">
                                <p><strong>Border Radius:</strong></p>
                                <input type="text" id="border-radius"></input>
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