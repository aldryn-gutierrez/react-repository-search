import React, { Component } from 'react';
import { connect } from 'react-redux';
import RepositoryListItem from '../components/repository_list_item';

class RepositoryList extends Component {
  renderRepositoryItem(repository) {
    return (
      <RepositoryListItem
        key={repository.id}
        repository={repository} />
    )
  }

  render() {
    return (
      <ul className="col-md-12 list-group">
        {this.props.repositories.map(this.renderRepositoryItem)}
      </ul>
    );
  }
}

function mapStateToProps({ repositories }) {
  return { repositories };
}

export default connect(mapStateToProps)(RepositoryList);
