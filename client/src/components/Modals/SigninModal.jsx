import React from "react";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import API from "../../utils/API";

class SigninModal extends React.Component {
    static propTypes = {
        closeModal: PropTypes.func
    }

    static defaultProps = {
        closeModal: () => console.warn("No closeModal function defined")
    }

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
                this.props.history.push('/userIndex');
                this.props.closeModal();
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
        return (
            <div className="signin-modal">
                <div id="id01" className="modal">
                    <form className="modal-content animate" onSubmit={this.handleFormSubmit}>
                        <div className="container">
                            <span
                                onClick={this.props.closeModal}
                                className="close"
                                title="Close Modal"
                            >
                                &times;
                </span>
                            <label htmlFor="firstName">
                                <b>Name</b>
                            </label>
                            <input
                                value={this.state.firstName}
                                name="firstName"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="First Name"
                            />
                            <label htmlFor="lastName">
                                <b>Last Name</b>
                            </label>
                            <input
                                value={this.state.lastName}
                                name="lastName"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Last Name"
                            />
                            <label htmlFor="email">
                                <b>User Name</b>
                            </label>
                            <input
                                value={this.state.email}
                                name="email"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="email@gmail.com"
                            />

                            <label htmlFor="password">
                                <b>Password</b>
                            </label>
                            <input
                                value={this.state.password}
                                name="password"
                                onChange={this.handleInputChange}
                                type="password"
                                placeholder="password"
                            />

                            <button type="submit">Register</button>
                        </div>

                        <div className="cancel-container">
                            <button
                                type="button"
                                onClick={this.props.closeModal}
                                className="cancelbtn"
                            >
                                Cancel
                </button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default withRouter(SigninModal);