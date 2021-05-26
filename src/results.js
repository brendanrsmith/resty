import React from 'react';
import { If, Then, Else } from 'react-if';
import './styles/form.scss'

class Results extends React.Component {

  render() {
    return (
      <section className="results">
        <If condition={this.props.count}>
          <Then>
            <If condition={this.props.loading}>
              <Then>
                <h3>Loading...</h3>
              </Then>
            </If>
            <Else>
              <ul>
                <pre>{JSON.stringify(this.props, null, 4)}</pre>
              </ul>
            </Else>
          </Then>
        </If>
      </section >
    )
  }
}

export default Results;