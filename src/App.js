import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AddCat } from './components/AddCat';
// import { EditCat } from './components/EditCat';
import { Home } from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import { EditCat } from './components/EditCat';
// import { Jumbotron, Container } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Header />
          {/* <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-4">Fluid jumbotron</h1>
              <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </Container>
          </Jumbotron> */}

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddCat} />
            <Route path="/edit/:id" component={EditCat} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
