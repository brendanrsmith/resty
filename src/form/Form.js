import React from 'react';
import './form.scss'
import axios from 'axios';
class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: "",
      method: "GET"
    }
  }

  handleChange = e => {
    const url = e.target.value;
    this.setState({ url });
  }

  setMethod = e => {
    e.preventDefault();
    const method = e.target.value;
    this.setState({ method });
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.props.toggleLoading();
    const query = {
      url: this.state.url,
      method: this.state.method
    }
    const raw = await axios(query);
    const data = raw.data;
    console.log(data.data);
    const count = data.count;
    const headers = raw.headers;
    const results = data;
    this.props.handler(headers, count, results, query);
    this.props.toggleLoading();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" required='true' onChange={this.handleChange} placeholder="Enter URL here" />
        <button>{this.props.prompt}</button>
        <br></br>
        <button className={`method-${this.state.method === 'GET'}`} onClick={this.setMethod} value='GET'>GET</button>
        <button className={`method-${this.state.method === 'PUT'}`} onClick={this.setMethod} value='PUT'>PUT</button>
        <button className={`method-${this.state.method === 'POST'}`} onClick={this.setMethod} value='POST'>POST</button>
        <button className={`method-${this.state.method === 'DELETE'}`} onClick={this.setMethod} value='DELETE'>DELETE</button>
        {/* <textarea rows="2" name='text-body'></textarea> */}
      </form>
    )
  }

}

export default Form;