import React from 'react';
import { withRouter } from 'react-router-dom';

import './history.scss'

class History extends React.Component {

  render() {
    let items = this.props.history.map((query, i) => <li key={i}><button onClick={this.props.handler(query)}>{query.method} {query.url}</button></li>);

    return (
      <section id="history">
        <h3>History</h3>
        <ul>
          {items}
        </ul>
      </section>
    )
  }
}

export default History;