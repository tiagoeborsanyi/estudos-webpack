import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
           
        </Layout>
      </div>
    );
  }
}

export default App;