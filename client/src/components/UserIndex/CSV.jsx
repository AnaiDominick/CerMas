import React from "react";
import "../../styles/CSV.css";

class CSV extends React.Component {
  render() {
    return (
      <div class="cardCSV">
        <div class="containerCSV">
          <h4>
            <b>Select your .csv File</b>
          </h4>
          <hr />
          <p>
            Remember that CER+ depends on the reliability of your .CSV to work
            correctly.
          </p>
          <form>
            <input type="text" name="csv" />
            <hr />
            <input type="submit" value="Submit" className="CSV-btn" />
          </form>
        </div>
      </div>
    );
  }
}

export default CSV;
