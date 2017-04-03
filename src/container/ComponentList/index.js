// Dependencies
import React from "react";
// Components
import Counter from "./../../components/Counter/Counter";

export default class ComponentList extends React.Component {

  render() {
    return (
      <section>
        <Counter startNumber="5"/>
        <Counter startNumber="250"/>
      </section>
    )
  }
}
