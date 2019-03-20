import React, { Component } from "react";
import API from "../utils/API";

class Signup extends Component {
  // Setting the component's initial state
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""

    };
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    if (name === "password" && value.length > 15) {
      return;
    }

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    const firstName = this.state.firstName.trim();
    const lastName = this.state.lastName.trim();
    const email = this.state.email.trim();
    const password = this.state.password.trim();

    if (this.areInputsValid(firstName, lastName, email, password)) {
      API.saveUser({
        firstName,
        lastName,
        email,
        password
      }).then(() => {
        this.props.history.push('/');
      });
    }
  };

  areInputsValid = () => {
    if (this.state.firstName.length < 1 || this.state.lastName.length < 1) {
      alert("Please fill out the first name and last name fields");
      return false;
    }

    if (this.state.password.length < 6) {
      alert("Your password should be at leats 6 characters long");
      return false;
    }

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    return true;
  }

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>

        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="email@gmail.com"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
