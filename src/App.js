import React from 'react';
import './styles/style.scss';

import Header from './header.js';
// import Form from './form.js';
import Footer from './footer.js';
import Form2 from './form2';
import People from './people';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      count: 0,
      results: []
    }
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  handleForm = (count, results) => {
    this.setState({count, results});
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form2 prompt="click for star war" toggleLoading={this.toggleLoading} handler={this.handleForm} />
        <People people={this.state.results} />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;