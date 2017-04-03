// Dependencies
import React from "react";
// Components
import NavBar from "./../../components/NavBar/NavBar";
import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import ComponentList from "../ComponentList"

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />
        <main>
          <NavBar />
          <ComponentList />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
