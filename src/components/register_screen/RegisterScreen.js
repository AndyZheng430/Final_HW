import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { registerHandler } from '../../store/database/asynchHandler';
import { getFirestore } from 'redux-firestore';

class RegisterScreen extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    wireframeId: null,
  }

  handleChange = (e) => {
    const { target } = e;

    this.setState(state => ({
      ...state,
      [target.id]: target.value,
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // creates a new wireframe list in database and adds the id to user information
    const firestore = getFirestore();
    var current_doc = firestore.collection("WireFrameList").doc();
    current_doc.set({ wireframe: [] });
    this.state.wireframeId = current_doc.id;
    console.log(this.state.wireframeId);

    const { props, state } = this;
    const { firebase } = props;
    const newUser = { ...state };

    props.register(newUser, firebase);
  }

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) {
      return <Redirect to="/" />;
    }

    return (
      <div className="register-container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Register</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">Sign Up</button>
            {authError ? <div className="red-text center"><p>{authError}</p></div> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  authError: state.auth.authError,
});

const mapDispatchToProps = dispatch => ({
  register: (newUser, firebase) => dispatch(registerHandler(newUser, firebase)),
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps),)(RegisterScreen);