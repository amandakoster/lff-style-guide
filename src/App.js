import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuSimple from './components/menu';
import './App.css';

const App = () => (

      <MuiThemeProvider>
        <MenuSimple />
      </MuiThemeProvider>
    );


export default App;
