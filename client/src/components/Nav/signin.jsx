import React from "react";
import "../../styles/signin.css";

class Signin extends React.Component {
  constructor() {
    super();
    this.modal = React.createRef();
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    var style = this.modal.current.style.display;
    console.log(this.modal);
    if (style === "" || style === "none") {
      this.modal.current.style.display = "block";
    } else {
      this.modal.current.style.display = "none";
    }
    console.log(this.modal.current.style.display);
  }

  render() {
    return (
      <div className="signin-modal">
        {/*<!-- The Modal -->*/}
        <div id="id01" className="modal" ref={this.modal}>
          {/*<!-- Modal Content -->*/}
          <form className="modal-content animate" action="/action_page.php">
            <span
              onClick={this.toggleModal}
              className="close"
              title="Close Modal"
            >
              &times;
            </span>
            <div className="container">
              <label htmlFor="name">
                <b>Name</b>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                required
              />

              <label htmlFor="uname">
                <b>User Name</b>
              </label>
              <input
                type="text"
                placeholder="Enter Your User Name"
                name="uname"
                required
              />

              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Mail"
                name="email"
                required
              />

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />

              <button type="submit">Register</button>
            </div>

            <div className="cancel-container">
              <button
                type="button"
                onClick={this.toggleModal}
                className="cancelbtn"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;
