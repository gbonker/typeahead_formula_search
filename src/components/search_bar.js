import React, { Component } from 'react';
//import Typeahead from 'react-typeahead';
var Typeahead = require('react-bootstrap-typeahead').Typeahead;

const functions = ['avg', 'count', 'max', 'min', 'sum'];
const comparators = ['>', '<', '>=', '<=', '==', 'NOT'];
const fields = ['@revenue', '@quantity', '@created_at'];

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { formula: '' };
  }

  getContext(formula, pos) {
    let startOfContext = pos - 1;
    if (startOfContext < 0) {
      startOfContext = 1;
    }
    while (startOfContext > 0) {
      let char = formula[startOfContext];
      if (char === " " || char === "(" || char === ")" || char === ",") {
        startOfContext++;
        break;
      }
      startOfContext--;
    }
    let endOfContext = pos;
    return formula.substring(startOfContext, endOfContext);
  }

  getChoices(context) {
    if (!context || context === "") {
      return [];
    } 
    return functions.filter(function(choice){ return choice.indexOf(context) !== -1 });
  }

  render() {
    return (
      <Typeahead
        allowNew
  	    onChange={this._handleChange}
        options={functions}
        bsSize="large"
        placeholder="Search for a formula..."
  	  />
    );
  }
}
export default SearchBar;