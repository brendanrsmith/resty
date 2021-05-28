import React from 'react';
import { If, Then, Else } from 'react-if';
// import '../core.scss';

class Results extends React.Component {

  render() {
    return (
      <section className="results">
            <If condition={this.props.loading}>
              <Then>
                <h3>Loading...</h3>
              </Then>
            </If>
            <Else>
              <ul>
                <pre><b>Count:</b> {this.props.count}</pre>
                <pre><b>Headers:</b> {JSON.stringify(this.props.headers, null, 4)}</pre>
                <pre><b>Body:</b> {JSON.stringify(this.props.results, null, 4)}</pre>
              </ul>
            </Else>
      </section >
    )
  }
}

export default Results;