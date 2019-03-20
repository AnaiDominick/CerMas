import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";
import footer from "../../img/footer.png";

class Footer extends React.Component {
  render() {
    return (
      <nav className="footer">
        <div className="contact">
          <Link to="/">CER + Plans </Link>
          &nbsp; &#47; &nbsp;
          <Link to="">hello@cermas.com.mx </Link>
          &nbsp; &#47; &nbsp;
          <span>Tel. 01 800 CER MAS</span>
        </div>
      </nav>
    );
  }
}

export default Footer;
