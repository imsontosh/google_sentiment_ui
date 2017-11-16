import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Body from './module/body';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="Smart Reviewer"
            iconClassNameRight="muidocs-icon-navigation-expand-more1"
          />
          <Body />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
