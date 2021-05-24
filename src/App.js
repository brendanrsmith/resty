import React from 'react';
import './styles/style.scss';

import Header from './header.js';
import Form from './form.js';
import Footer from './footer.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;