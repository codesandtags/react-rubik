// dependencies
import React from "react";
// styles
import './Counter.scss';

class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      number: Number(this.props.startNumber) || 0
    };

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    let incrementedNumber = this.state.number + 1;
    this.setState({number: incrementedNumber});
  }


  render() {
    return (
      <div className="rr-counter">
        <button onClick={this.incrementCounter}>👍🏻</button>
        <span>{this.state.number}</span>
      </div>
    );
  }
}

export default Counter;
