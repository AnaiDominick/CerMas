import React from "react";
import "../../styles/navbar.css";
import bar from "../../img/navbar.png";
import logo from "../../img/logo.png";
import LoginModal from "../Modals/LoginModal";
import SigninModal from "../Modals/SigninModal";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoginModal: false,
      showSigninModal: false
    };
  }

  toggleModal = modal => {
    this.setState({
      [modal]: !this.state[modal]
    });
  };

  render() {
    return (
      <nav className="navbar">
        <img src={bar} alt="navbar" className="bar" />
        <img href="/" className="logo" src={logo} alt="navbar" />

        <div className="nav-btns">
          <button
            className="login-btn"
            onClick={() => {
              this.toggleModal("showLoginModal");
            }}
          >
            Log in
          </button>
          <button
            className="signin-btn"
            onClick={() => {
              this.toggleModal("showSigninModal");
            }}
          >
            Sign in
          </button>
        </div>
        {this.state.showLoginModal ? (
          <LoginModal
            closeModal={() => {
              this.toggleModal("showLoginModal");
            }}
          />
        ) : null}
        {this.state.showSigninModal ? (
          <SigninModal
            closeModal={() => {
              this.toggleModal("showSigninModal");
            }}
          />
        ) : null}
      </nav>
    );
  }
}

export default Navbar;
