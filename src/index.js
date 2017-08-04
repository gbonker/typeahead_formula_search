import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Typeahead} from 'react-bootstrap-typeahead';

import SearchBar from './components/search_bar';
 
class App extends Component {
	constructor(props) {
    super(props);

    this.state = { 
      formula: '' 
    };
  }

  render() {
    return (
      <SearchBar />
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));