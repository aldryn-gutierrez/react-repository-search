import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepositories } from '../actions/index';
import { browserHistory } from 'react-router';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: props.initialTerm };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.searchTerm();
  }

  searchTerm() {
    if (!this.state.term) {
      return;
    }

    _.debounce(
      () => this.props.fetchRepositories(this.state.term),
      1000
    )();
  }

  onInputChange(event) {
    const term = event.target.value

    this.setState({term});
    browserHistory.push(`/search?q=${term}`)
    this.searchTerm();
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="search-bar">
        <form className="input-group" onSubmit={this.onFormSubmit} >
          <span className="input-group-addon">Repository Name:</span>
          <input
            onChange={this.onInputChange}
            value={this.state.term}
            className="form-control"
            placeholder="Search your repositories" />
        </form>
      </div>
    )
  }
}

export default connect(null, { fetchRepositories })(SearchBar);
