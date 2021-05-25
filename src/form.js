import React from 'react';
import './styles/form.scss'

class Form extends React.Component {
  
  constructor(props) {
    super(props); // for now, just do this
    this.state = {
      url: '',
      method: '',
      urlMethod: '',
    }
  }

  handleChange = e => {
    let url = e.target.value;
    this.setState({ url });
  }

  handleClick = e => {
    e.preventDefault();
    let urlMethod = this.state.method +  ' ' + this.state.url;
    this.setState({ urlMethod });
  }

  setMethod = e => {
    // e.preventDefault();
    let method = e.target.value;
    this.setState({ method });
  }

  render() {
    return (
      <div>
        <form id='url'>
          <input type="text" required='true' onChange={this.handleChange} placeholder="Enter URL here" />
          <button type='button' onClick={this.handleClick}>GO!</button>
          <br></br>
          <label><input onChange={this.setMethod} required='true' type='radio' name='method' value='get' id='get'></input>get</label>
          <label><input onChange={this.setMethod} required='true' type='radio' name='method' value='put' id='put'></input>put</label>
          <label><input onChange={this.setMethod} required='true' type='radio' name='method' value='post' id='post'></input>post</label>
          <label><input onChange={this.setMethod} required='true' type='radio' name='method' value='delete' id='delete'></input>delete</label>
        </form>
        <ul>
          <li>{this.state.urlMethod}</li>
        </ul>
      </div>
    )
  }
}

export default Form;