import React from "react";

class SearchBar extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = { searchTerm: this.getInit(this.props.initSearch) };
    }

    getInit(data){
      return data;
    }

    handleChange = (e) => {
      this.setState({ searchTerm: e.target.value });
    };

    render() {
      return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="navbar-brand">Github Search Demo {this.props.init}</div>
            <div className="form-inline">
            <input  
              value={this.state.searchTerm}
              onChange={this.handleChange}
              className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
                onClick={() => this.props.onSearchChange(this.state.searchTerm)}
            >Search</button>
            </div>
        </nav>
      );
    }
};

export default SearchBar;
