import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import RepositoryList from '../containers/repository_list';

export default class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {initialTerm: ''}
  }

  componentWillMount() {
    const initialTerm = this.props.location.query.q;
    if (initialTerm) {
      this.setState({initialTerm});
    }
  }

  render() {
    return (
      <div>
        <SearchBar initialTerm={this.state.initialTerm}/>
        <RepositoryList />
      </div>
    );
  }
}
