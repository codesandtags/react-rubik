// dependencies
import React from "react";
// styles
import "./Counter.scss";

class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      number: Number(this.props.startNumber) || 0,
      animation: '',
      iconText: this.props.iconText || '➕',
      audioSrc: '/assets/sounds/kiss.mp3'
    };

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    const $sound = document.querySelector(`[src="${this.state.audioSrc}"]`);
    $sound.play();

    this.setState({animation: 'grow'});

    setTimeout(() => {
      this.setState({animation: ''});
    }, 200);

    let incrementedNumber = this.state.number + 1;
    this.setState({number: incrementedNumber});
  }


  render() {
    const {animation} = this.state;

    return (
      <div className="rr-counter">
        <button onClick={this.incrementCounter}>{this.state.iconText}</button>
        <span className={animation}>{this.state.number}</span>
        <audio src={this.state.audioSrc}></audio>
      </div>
    );
  }
}

export default Counter;
