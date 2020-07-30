import React from 'react';
import GlobalStyle from './Styles/global';
import Navigation from './Components/navigation'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Components/routes'
import { history } from './history'

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <GlobalStyle />
        <Navigation />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
