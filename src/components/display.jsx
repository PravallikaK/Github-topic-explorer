import React, { Component } from "react";
import SearchResult from "./searchResult";

class DisplayContent extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: this.getInit(this.props.search) };
  }

  getInit(data) {
    return data;
  }

  handleChange = (value) => {
    if (value !== this.state.searchTerm) {
      this.setState({ searchTerm: value });
    }
  };

  render() {
    return (
      <div>
        <h3 className="display-4" title="topic of search term">
          TOPIC:{" "}
          <span className="badge badge-secondary">
            {this.props.search === "" ? "All" : this.props.search}
          </span>
        </h3>
        <SearchResult
          key={this.props.search}
          value={this.props.search}
          onChange={this.handleChange}
        ></SearchResult>
      </div>
    );
  }
}

export default DisplayContent;
