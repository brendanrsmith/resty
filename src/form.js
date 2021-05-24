import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props); // for now, just do this
    this.state = {
      url: 'nothing to see yet'
    }
  }

  handleChange = e => {
    let url = e.target.value;
    this.setState({ url });
  }

  handleClick = e => {
    e.preventDefault();
    let url = this.state.url.split('').reverse().join('');
    this.setState({ url });
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" onChange={this.handleChange} placeholder="Enter URL here" />
          <button onClick={this.handleClick}>GO!</button>
        </div>
        <div>
          <button id='get'>GET</button>
          <button id='post'>POST</button>
          <button id='put'>PUT</button>
          <button id='delete'>DELETE</button>
        </div>
        <div>
          <h3>{this.state.url}</h3>
        </div>
      </div>
    )
  }
}

export default Form;