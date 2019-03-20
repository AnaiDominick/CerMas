import React from "react";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import avatar from "../../img/img_avatar2.png";
import API from "../../utils/API";


class LoginModal extends React.Component {
    static propTypes = {
        closeModal: PropTypes.func
    }

    static defaultProps = {
        closeModal: () => console.warn("No closeModal function defined")
    }

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

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        const email = this.state.email.trim();
        const password = this.state.password.trim();


        if (this.areInputsValid(email, password)) {
            // console.log(this.state);
            API.login({
                email: this.state.email,
                password: this.state.password
            })
                .then((response) => {
                    this.props.history.push('/userIndex');
                    this.props.closeModal();
                }

                )
                .catch(err => console.log(err));
        }
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
            <div className="login-modal">
                <div id="id01" className="modal">
                    <form className="modal-content animate" onSubmit={this.handleFormSubmit}>
                        <span
                            onClick={this.props.closeModal}
                            className="close"
                            title="Close Modal"
                        >
                            &times;
                        </span>
                        <div className="imgcontainer">
                            <img src={avatar} alt="Avatar" className="avatar" />
                        </div>

                        <div className="container">
                            <label htmlFor="email">
                                <b>Username</b>
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
                            <button type="submit">Login</button>
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

export default withRouter(LoginModal);