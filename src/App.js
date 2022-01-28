import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import './core.scss';

import Headers from './header/Header.js';
import Footer from './footer/Footer.js';
import Form from './form/Form';
import History from './history/History';
import Results from './results/Results';
import Help from './Help';

export default function App(props) {

  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [results, setResults] = useState([]);
  const [headers, setHeaders] = useState('');
  const [history, setHistory] = useState([]);
  // TODO: move history to local Storage

  const toggleLoading = (loading) => {
    setLoading(loading);
  };

  const handleForm = async (query) => {
    toggleLoading(true);
    try {
      const raw = await axios(query);
      const data = raw.data;
      const count = data.count;
      const headers = raw.headers;
      const results = data;
      setHeaders(headers);
      setCount(count);
      setResults(results);
      setHistory([...history, query]);
      setLoaded(true);
      toggleLoading(false);
    } catch (error) {
      return;
    }
  };

  const handleHist = async (query) => {
    // TODO: click history item to propogate query input
    // console.log(query);
    await handleForm(query);
    // console.log(this.state.history);
    setHistory(history.splice(0, history.length));
    // sessionStorage.getItem('query')
    // sessionStorage.setItem('query', JSON.stringify(query));
  };


  return (
    <BrowserRouter basename='/resty'>
      <Headers />
      <Switch>
        <Route exact path="/">
          <Form prompt="Go!" toggleLoading={toggleLoading} handler={handleForm} />
          {/* TODO: <div className="reshist"> */}
          <History history={history} handler={handleHist} />
          <Results headers={headers} count={count} results={results} loading={loading} loaded={loaded} />
          {/* </div> */}
        </Route>
        <Route path="/history">
          <History history={history} handler={handleHist} />
          <Results results={results} loading={loading} loaded={loaded} />
          <div></div>
        </Route>
        <Route path="/help">
          <Help />
          <div></div>
          <div></div>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

