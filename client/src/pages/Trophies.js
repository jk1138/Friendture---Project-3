import React, { Component } from "react";
import ReactCardFlip from 'react-card-flip';
import TrophyImages from "../components/TrophyImage";
import TrophyEmailForm from "../components/TrophyEmailForm";

class Trophy extends Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
   
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <TrophyImages key="front">
            This is the front of the card.
            <button onClick={this.handleClick}>Click to flip</button>
          </TrophyImages>
   
          <TrophyEmailForm key="back">
            This is the back of the card.
            <button onClick={this.handleClick}>Click to flip</button>
          </TrophyEmailForm>
        </ReactCardFlip>
      )
    }
  }

  export default Trophy;