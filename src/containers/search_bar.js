import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepositories } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);

    this._debouncedSearch = _.debounce(
      () => this.props.fetchRepositories(this.state.term),
      500
    );
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
    if (event.target.value) {
      this._debouncedSearch();
    }
  }

  render() {
    return (
      <div className="search-bar">
        <form className="input-group">
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
