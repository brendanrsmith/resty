import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles/style.scss';

import Headers from './Header.js';
import Footer from './Footer.js';
import Form from './Form2';
import History from './History';
import Results from './Results';
import Help from './Help';

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
    this.setState({ headers, count, results });
    this.setState({ history: [...this.state.history, search] });
  }

  handleHist = (query) => {
    // TODO: click history item to propogate query input

    // sessionStorage.getItem('query')
    // sessionStorage.setItem('query', JSON.stringify(query));
  }


  render() {
    return (
      <BrowserRouter>
        <Headers />
        <Switch>
          <Route exact path="/">
            <Form prompt="Go!" toggleLoading={this.toggleLoading} handler={this.handleForm} />
            <History history={this.state.history} handler={this.handleHist} />
            <Results headers={this.state.headers} count={this.state.count} results={this.state.results} loading={this.state.loading} />
          </Route>
          <Route path="/history">
            <History history={this.state.history} handler={this.handleHist} />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }

}

export default App;