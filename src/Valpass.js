import React, { Component } from 'react';
import './App.css';

/* Build a Sign Up Form component that:

Prompts the user to enter their email, password and password confirmation
When the user submits the form:
Notify the user of whether or not their submission was valid
*/

class ValPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', pass: '', pass2: ''};
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangePass(event) {
    this.setState({ pass: event.target.value});
  }

  handleChangePass2(event) {
    this.setState({pass2: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.pass== this.state.pass2) {
      alert("Passwords Match for Email id:"+ this.state.email)
    }
    else {
      alert("Passwords Don't for Email id:"+ this.state.email)
    }
  }

    render() {
      return (
        <form onSubmit={(e) => this.handleSubmit(e)}>
        Email:
        <input type="text" value={this.state.email} onChange={ (e) => this.handleChangeEmail(e)} />
        Password:
        <input type="text" value={this.state.pass} onChange={ (e) => this.handleChangePass(e)} />
        Password Confirmation:
        <input type="text" value={this.state.pass2} onChange={ (e) => this.handleChangePass2(e)} />

        <input type="submit" value="Submit" />
        </form>
      );
    }
  }


  export default ValPass;
