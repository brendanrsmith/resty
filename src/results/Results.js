import React from 'react';
import { If, Then, Else } from 'react-if';

class Results extends React.Component {

  render() {
    return (
      <section className="results">
        <If condition={this.props.loading}>
          <Then>
            <div className="loader"></div>
          </Then>
          <Else>
            <If condition={this.props.loaded}>
              <Then>
                <ul>
                  <pre><b>Count:</b> {this.props.count}</pre>
                  <pre><b>Headers:</b> {JSON.stringify(this.props.headers, null, 4)}</pre>
                  <pre><b>Body:</b> {JSON.stringify(this.props.results, null, 4)}</pre>
                </ul>
              </Then>
              <Else>
              </Else>
            </If>
          </Else>
        </If>
      </section >
    )
  }
}

export default Results;