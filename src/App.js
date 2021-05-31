import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import './core.scss';

import Headers from './header/Header.js';
import Footer from './footer/Footer.js';
import Form from './form/Form';
import History from './history/History';
import Results from './results/Results';
import Help from './Help';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
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

  handleForm = async (query) => {
    console.log('handleform called', query);
    this.toggleLoading();
    const raw = await axios(query);
    const data = raw.data;
    console.log(data.data);
    const count = data.count;
    const headers = raw.headers;
    const results = data;
    this.setState({ headers, count, results });
    this.setState({ history: [...this.state.history, query] });
    this.setState({ loaded: true });
    this.toggleLoading();
  }

  handleHist = async (query) => {
    // TODO: click history item to propogate query input
    console.log(query);
    await this.handleForm(query);
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
            {/* TODO: <div className="reshist"> */}
            <History history={this.state.history} handler={this.handleHist} />
            <Results headers={this.state.headers} count={this.state.count} results={this.state.results} loading={this.state.loading} loaded={this.state.loaded} />
            {/* </div> */}
          </Route>
          <Route path="/history">
            <History history={this.state.history} handler={this.handleHist} />
            <Results results={this.state.results} loading={this.state.loading} loaded={this.state.loaded} />
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