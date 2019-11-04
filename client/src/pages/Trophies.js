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
      isFlipped1: false,
      isFlipped2: false,
      isFlipped: false,
      trophiesJSON: data
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
            image={"https://us.123rf.com/450wm/yusakp/yusakp1801/yusakp180100015/92743597-stock-vector-vector-illustration-of-delicious-slice-of-pepperoni-pizza-with-melted-cheese-hand-drawn-.jpg?ver=6"}
            alt={"clipart slice of pepperoni pizza"}
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
              image={"https://i.pinimg.com/originals/ab/dd/b8/abddb8ceb741295de5be05ea83ebf60b.png"}
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
              image={"https://cdn.pixabay.com/photo/2016/01/12/20/39/slimming-1136637__480.png"}
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