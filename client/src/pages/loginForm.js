import React, { Component } from "react";
import API from "../utils/API";

// const express = require("express");
// const app = express();


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    // Handles updating component state when the user types into the input field
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

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        const email = this.state.email.trim();
        const password = this.state.password.trim();
        // let data = response.payload.data;

        if (this.areInputsValid(email, password)) {
            // console.log(this.state);
            API.login({
                email: this.state.email,
                password: this.state.password
            })

                .then(
                    window.location.href = "/csv"

                )
                .catch(err => console.log(err));
        }

        // sessionStorage.setItem('jwtToken', data.token);
        // console.log(sessionStorage);
    };


    areInputsValid = () => {
        if (this.state.email.length < 1 || this.state.email.length < 1) {
            alert("Please fill out the email fields");
            return false;
        }

        if (this.state.password.length < 6) {
            alert("Your password should be at leats 6 characters long");
            return false;
        }

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        // alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
        console.log(this.state.email);
        alert("Welcome!");
        return true;
    };


    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleFormSubmit}>
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
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;

