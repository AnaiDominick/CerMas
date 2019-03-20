import React from "react";
import { Link } from "react-router-dom";
import footer from "../../img/footer.png";
import Footer from "./footer";
import "../../styles/Footer.css";

function Foot() {
  return (
    <div>
      <img className="footer-img" src={footer} alt="footer" />
      <div className="contact">
        <Link to="/">CER + Plans</Link>
        &nbsp; &#47; &nbsp;
        <Link to="">hello@cermas.com.mx </Link>
        &nbsp; &#47; &nbsp;
        <span>Tel. 01 800 CER MAS</span>
      </div>
    </div>
  );
}

export default Foot;
