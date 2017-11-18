import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import BarbiesDisplay from './pages/BarbiesDisplay'
import BarbieDetail from './pages/BarbieDetail'
import AddEditDoll from './pages/AddEditDoll'


import './App.css';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

/* Category component */
const Category = () => (
  <div>
    <Switch>
      <Route path="/" exact component={BarbiesDisplay} />
      <Route path="/add" exact component={AddEditDoll} />
      <Route path="/:id" component={BarbieDetail} />
    </Switch>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/barbies">Barbies</Link></li>
            <li><Link to="/barbies/add">Add A Doll</Link></li>
            <li><Link to="barbies/2">Skipper</Link></li>
          </ul>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/barbies" component={Category}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
