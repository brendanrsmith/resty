import React from 'react';
import './styles/style.scss';

import Header from './header.js';
import Footer from './footer.js';
import Form2 from './form2';
import Results from './results';
import History from './history';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      count: 0,
      results: [],
      header: ""
    }
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  handleForm = (header, count, results) => {
    this.setState({header, count, results});
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form2 prompt="Go!" toggleLoading={this.toggleLoading} handler={this.handleForm} />
        <History count={this.state.count} />
        <Results header={this.state.header} count={this.state.count} results={this.state.results} loading={this.state.loading} />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;