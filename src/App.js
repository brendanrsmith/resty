import React from 'react';
import './styles/style.scss';

import Headers from './header.js';
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
      headers: "",
      history: []
      // TODO: move history to local Storage
    }
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  handleForm = (headers, count, results, search) => {
    this.setState({headers, count, results});
    this.setState({history: [...this.state.history, search]});
  }

  handleHist = (query) => {
    // TODO: click history item to propogate query input
  }

  render() {
    return (
      <React.Fragment>
        <Headers />
        <Form2 prompt="Go!" toggleLoading={this.toggleLoading} handler={this.handleForm} />
        <History history={this.state.history} handler={this.handleHist}/>
        <Results headers={this.state.headers} count={this.state.count} results={this.state.results} loading={this.state.loading} />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;