import React from "react";
import './App.css';
import SearchBar from './components/searchbar';
import DisplayContent from "./components/display";

class App extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: '', click: 0 };
  }
  
  handleSearchChange = key => {
    this.setState({ searchTerm: key });
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render(){
    return (  
      <div>
        <SearchBar initSearch={this.state.searchTerm} onSearchChange={this.handleSearchChange}></SearchBar>
        <div className="jumbotron">
          <DisplayContent search={this.state.searchTerm}></DisplayContent>
          <hr className="my-4"></hr>
        </div>
      </div>
    );
  }
}
export default App;
