import React, { Component } from 'react';
var Typeahead = require('react-bootstrap-typeahead').Typeahead;

const functions = ['avg({predicate}, {field})', 'count({predicate})', 'max({predicate}, {field})', 'min({predicate}, {field})', 'sum({predicate}, {field})'];
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
      <div className="search-bar">
      <Typeahead
        allowNew
        options={functions}
        bsSize="large"
        placeholder="Search for a formula..."
  	  />
      </div>
    );
  }
}
export default SearchBar;