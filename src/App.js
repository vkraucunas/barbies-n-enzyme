import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Paper from 'material-ui/Paper'
import HeaderDrawer from './components/HeaderDrawer'

import BarbiesDisplay from './pages/BarbiesDisplay'
import BarbieDetail from './pages/BarbieDetail'
import AddEditDoll from './pages/AddEditDoll'

import './App.css';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const styles = {
  App: {
    height: '100%',
    minHeight: '100vh',
    width: '100%',
    margin: '0',
    padding: '0',
    border: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  Header: {
    marginBottom: '50px'
  },
  Container: {
    margin: 'auto',
    width: '80%',
    padding: '50px 100px',
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
  },
  Footer: {
    marginTop: "50px",
    textAlign: 'center'
  }
}

const navLinks = [
  {
    to: "/",
  text: 'Home',
},
  {
    to: "/barbies",
  text: 'Barbies',
},
  {
    to: "/barbies/add",
  text: 'Add A Doll',
},
  {
    to: "/barbies/2",
  text: 'Skipper',
},
]

/* Category component */
const Category = () => (
  <Switch>
    <Route exact path="/barbies" component={BarbiesDisplay} />
    <Route exact path="/barbies/add" component={AddEditDoll} />
    <Route path="/barbies/:id/edit" component={AddEditDoll} />
    <Route path="/barbies/:id" component={BarbieDetail} />
  </Switch>
)


class App extends Component {
  render() {
    return (
      <div style={styles.App}>
        <header style={styles.Header}>
          <HeaderDrawer
            linkInfo={navLinks}
          />
        </header>
        <main>
          <Paper zDepth={2} style={styles.Container}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/barbies" component={Category}/>
            </Switch>
          </Paper>
        </main>
        <footer style={styles.Footer}>
          <p>&copy; Gibsunas Consulting, LLC, {new Date().getFullYear()}</p>
        </footer>
      </div>
    );
  }
}

export default App;
