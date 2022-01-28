import React from 'react';
// import { withRouter } from 'react-router-dom';


class History extends React.Component {

  render() {
    let items = this.props.history.map((query, i) => {
      return (
        <li key={i}>
          <button onClick={() => { this.props.handler(query) }}>
            <div className="queryMethod">{query.method}</div>
            <div className="queryUrl">{query.url}</div>
          </button>
        </li>
      )
    });

    return (
      <section id="history" >
        <ul>
          {items}
        </ul>
      </section>
    )
  }
}

export default History;