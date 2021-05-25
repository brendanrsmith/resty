import React from 'react';
import './styles/form.scss'

class Form extends React.Component {

  handleSubmit = async e => {
    e.preventDefault();

    let raw = await fetch('https://swapi.dev/api/people');
    let data = await raw.json();
    let count = data.count;

    console.log(data.results);

    let people = data.results.reduce((list, person) => {
      console.log(list, person);
      list[person.name] = person.url;
      return list;
    }, {});
    console.log(people);
    this.props.handler(count, people);
    this.props.toggleLoading();

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button>{this.props.prompt}</button>
      </form>
    )
  }

}

export default Form;