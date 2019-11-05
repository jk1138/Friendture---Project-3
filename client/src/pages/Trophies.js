import React, { Component } from "react";
import ReactCardFlip from 'react-card-flip';
import TrophyImages from "../components/TrophyImage";
import TrophyEmailForm from "../components/TrophyEmailForm";
import "./trophies.css";
import data from "./../utils/trophies.json";

class Trophy extends Component {
    constructor(props) {
        // const trophiesJSON = data;
        // console.log(trophiesJSON);
        // console.log(trophiesJSON[0].image);
      super(props);
        this.state = {
        isFlipped: false,
        trophiesJSON: data
    };
    this.handleClick = this.handleClick.bind(this);


}

   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

   
    render() {
      return (

      this.state.trophiesJSON.map(
        item =>  <div className="border addMargin">
           
        <ReactCardFlip className="border" isFlipped={this.state.isFlipped} flipDirection="horizontal">
          <TrophyImages
            image={item.image}
            alt={item.alt}
            name={item.name}
          className="border" key="front">
            This is the front of the card.
          </TrophyImages>
   
          <TrophyEmailForm name={item.name} className="border" key="back"
          >
            This is the back of the card.
          </TrophyEmailForm>
        </ReactCardFlip>
            <button className="border" onClick={this.handleClick}>Click to flip</button>
        </div>
         )
         
      )
    }
  }

  export default Trophy;