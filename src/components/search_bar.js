import React, { Component } from 'react';
//import Typeahead from 'react-typeahead';
var Typeahead = require('react-bootstrap-typeahead').Typeahead;

const functions = ['avg', 'count', 'max', 'min', 'sum'];

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
 
  render() {
    return (
      <Typeahead
  	    onChange={this._handleChange}
        options={functions}
  	  />
    );
  }
}
export default SearchBar;