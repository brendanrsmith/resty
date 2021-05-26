import React from 'react';
import './styles/form.scss'

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: "",
      method: ""
    }
  }

  handleChange = e => {
    let url = e.target.value;
    this.setState({ url });
  }

  setMethod = e => {
    e.preventDefault();
    let method = e.target.value;
    this.setState({ method });
  }

  handleSubmit = async e => {
    e.preventDefault();

    let raw = await fetch(this.state.url);
    let data = await raw.json();
    let count = data.count;

    console.log(data);
    let results = data.results;
    this.props.handler(count, results);
    this.props.toggleLoading();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" required='true' onChange={this.handleChange} placeholder="Enter URL here" />
        <button>{this.props.prompt}</button>
        <br></br>
        <button type='button' defaultChecked='true' onClick={this.setMethod} value='get'>GET</button>
        <button type='button' defaultChecked='false' onClick={this.setMethod} value='put'>PUT</button>
        <button type='button' defaultChecked='false' onClick={this.setMethod} value='post'>POST</button>
        <button type='button' defaultChecked='false' onClick={this.setMethod} value='delete'>DELETE</button>
      </form>
    )
  }

}

export default Form;