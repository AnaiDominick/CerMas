import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Papa from "papaparse";
import "../../styles/CSV.css";
import API from "../../utils/API";

class FileReader extends Component {
  constructor() {
    super();
    this.state = {
      csvfile: undefined
    };
    this.updateData = this.updateData.bind(this);
  }

  handleChange = event => {
    this.setState({
      csvfile: event.target.files[0]
    });
  };

  importCSV = () => {
    const { csvfile } = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
      delimiter: ",",
      skipEmptyLines: true,
      header: true
    });
  };

  updateData(result) {
    var data = result.data;
    console.log(data);
    API.saveCSV({
      data
    }).then(() => {
      this.props.history.push("/userIndex");
    });

    // API.savePopulate({
    //     data
    // }).then(() => {
    //     this.props.history.push('/');
    // });
  }

  render() {
    return (
      <div className="containerUI">
        <div className="cardCSV">
          <div className="containerCSV">
            <h2>Import .CSV File!</h2>
            <h4>
              <b>Select your file</b>
            </h4>
            <hr />
            <p>
              Remember that CER+ depends on the reliability of your .CSV to work
              correctly.
            </p>
            <input
              className="csv-input"
              type="file"
              ref={input => {
                this.filesInput = input;
              }}
              name="file"
              placeholder={null}
              onChange={this.handleChange}
            />
            <p />
            <button className="CSV-btn" onClick={this.importCSV}>
              {" "}
              Upload now!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FileReader);
