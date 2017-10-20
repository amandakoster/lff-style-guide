import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from './components/menu';
import Grid from './components/grid'
import './App.css';

const App = () => (

      <MuiThemeProvider>
        <Menu/>
        <Grid />
      </MuiThemeProvider>
    );


export default App;
