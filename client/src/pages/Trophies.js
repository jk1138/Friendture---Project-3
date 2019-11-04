import React, { Component } from "react";
import ReactCardFlip from 'react-card-flip';
import TrophyImages from "../components/TrophyImage";
import TrophyEmailForm from "../components/TrophyEmailForm";
import "./trophies.css";
import image1 from "../utils/images/gotPizzaTrophy.png";
import image2 from "../utils/images/selfieTrophy.png";
import image3 from "../utils/images/gymTrophy.png";

class Trophy extends Component {

  constructor(props) {
    // const trophiesJSON = data;
    // console.log(trophiesJSON);
    // console.log(trophiesJSON[0].image);
    super(props);
    this.state = {
      isFlipped1: false,
      isFlipped2: false,
      isFlipped: false,
      // trophiesJSON: data
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);


  }


  handleClick1(e) {
    e.preventDefault();

    if (this.state.isFlipped1) {
      this.setState({ isFlipped1: !this.state.isFlipped1 });
    } else if(!this.state.isFlipped1) {
      this.setState({ isFlipped1: !this.state.isFlipped1 });
    }  
  };

  handleClick2(e) {
    e.preventDefault();

    if (this.state.isFlipped2) {
      this.setState({ isFlipped2: !this.state.isFlipped2 });
    } else if(!this.state.isFlipped2) {
      this.setState({ isFlipped2: !this.state.isFlipped2 });
    }   
  };

  handleClick3(e) {
    e.preventDefault();

    if (this.state.isFlipped3) {
      this.setState({ isFlipped3: !this.state.isFlipped3 });
    } else if(!this.state.isFlipped3) {
      this.setState({ isFlipped3: !this.state.isFlipped3 });
    }
  };

  


  render() {
    return (

      <div><div className="border addMargin">

        <ReactCardFlip className="border" isFlipped={this.state.isFlipped1} flipSpeedFrontToBack={1.0}
          flipSpeedBackToFront={1.0} flipDirection="horizontal">
          <TrophyImages
            image={image1}
            name={"Got pizza!"}
            className="border" key="front">
            This is the front of the card.
          </TrophyImages>

          <TrophyEmailForm className="border" key="back"
          >
            This is the back of the card.
          </TrophyEmailForm>
        </ReactCardFlip>
        <button className="border" onClick={this.handleClick1} id="pizza">Click to flip</button>
      </div>

        <div className="border addMargin">

          <ReactCardFlip className="border" isFlipped={this.state.isFlipped2} flipSpeedFrontToBack={1.0}
            flipSpeedBackToFront={1.0} flipDirection="horizontal">
            <TrophyImages
              image={image2}
              alt={"cartoon photo of polaroid camera"}
              name={"Took a selfie together!"}
              className="border" key="front">
              This is the front of the card.
          </TrophyImages>

            <TrophyEmailForm className="border" key="back"
            >
              This is the back of the card.
          </TrophyEmailForm>
          </ReactCardFlip>
          <button className="border" onClick={this.handleClick2}>Click to flip</button>
        </div>

        <div className="border addMargin">

          <ReactCardFlip className="border" isFlipped={this.state.isFlipped3} flipSpeedFrontToBack={1.0}
            flipSpeedBackToFront={1.0} flipDirection="horizontal">
            <TrophyImages
              image={image3}
              alt={"photo of a thumbs-up made up of exercise icons"}
              name={"Exercised together?? YES!"}
              className="border" key="front">
              This is the front of the card.
          </TrophyImages>

            <TrophyEmailForm className="border" key="back"
            >
              This is the back of the card.
          </TrophyEmailForm>
          </ReactCardFlip>
          <button className="border" onClick={this.handleClick3}>Click to flip</button>
        </div>
      </div>
    )



  }
}

export default Trophy;