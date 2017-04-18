// Dependencies
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// Components
import NavBar from "./../../components/NavBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Home from "../../components/Home";
import ComponentList from "../ComponentList"

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <main>
            <NavBar />
            <section>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/components" component={ComponentList}/>
                <Route render={() => (
                  <h2>404 - Page not found</h2>
                )}/>
              </Switch>
            </section>
          </main>
          <Footer description="React Rubik" year="2018"/>
        </div>
      </Router>
    )
  }
}

export default App;
