import React, { Component } from "react";
import ReactCardFlip from 'react-card-flip';
import TrophyImages from "../components/TrophyImage";
import TrophyEmailForm from "../components/TrophyEmailForm";
import "./trophies.css";
import image1 from "../utils/images/gotPizzaTrophy.png";
import image2 from "../utils/images/selfieTrophy.png";
import image3 from "../utils/images/gymTrophy.png";
import image4 from "../utils/images/campingTrophy.png";
import image5 from "../utils/images/moviesTrophy.png";
import image6 from "../utils/images/roadTripTrophy.png";

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
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
    this.handleClick6 = this.handleClick6.bind(this);

  }


  handleClick1(e) {
    e.preventDefault();

    if (this.state.isFlipped1) {
      this.setState({ isFlipped1: !this.state.isFlipped1 });
    } else if (!this.state.isFlipped1) {
      this.setState({ isFlipped1: !this.state.isFlipped1 });
    }
  };

  handleClick2(e) {
    e.preventDefault();

    if (this.state.isFlipped2) {
      this.setState({ isFlipped2: !this.state.isFlipped2 });
    } else if (!this.state.isFlipped2) {
      this.setState({ isFlipped2: !this.state.isFlipped2 });
    }
  };

  handleClick3(e) {
    e.preventDefault();

    if (this.state.isFlipped3) {
      this.setState({ isFlipped3: !this.state.isFlipped3 });
    } else if (!this.state.isFlipped3) {
      this.setState({ isFlipped3: !this.state.isFlipped3 });
    }
  };


  handleClick4(e) {
    e.preventDefault();

    if (this.state.isFlipped4) {
      this.setState({ isFlipped4: !this.state.isFlipped4 });
    } else if (!this.state.isFlipped4) {
      this.setState({ isFlipped4: !this.state.isFlipped4 });
    }
  };

  handleClick5(e) {
    e.preventDefault();

    if (this.state.isFlipped5) {
      this.setState({ isFlipped5: !this.state.isFlipped5 });
    } else if (!this.state.isFlipped5) {
      this.setState({ isFlipped5: !this.state.isFlipped5 });
    }
  };

  handleClick6(e) {
    e.preventDefault();

    if (this.state.isFlipped6) {
      this.setState({ isFlipped6: !this.state.isFlipped6 });
    } else if (!this.state.isFlipped6) {
      this.setState({ isFlipped6: !this.state.isFlipped6 });
    }
  };

  render() {
    return (
      <div>
        {/* Start Pizza !!!! */}
        <div className="border addMargin">
          <ReactCardFlip className="border" isFlipped={this.state.isFlipped1} flipSpeedFrontToBack={1.0}
            flipSpeedBackToFront={1.0} flipDirection="horizontal">
            <TrophyImages className="img"
              image={image1}
              name={"Got pizza!"}
              className="border" key="front">
              This is the front of the card.
          </TrophyImages>

          <TrophyEmailForm className="border" key="back">
              This is the back of the card.
          </TrophyEmailForm>
          </ReactCardFlip>
          <button onClick={this.handleClick1} id="pizza">Fill out trophy form</button>
        </div>
        {/* End Pizza !!!! */}

        {/* Start Selfie!!!! */}
        <div className="border addMargin">
          <ReactCardFlip isFlipped={this.state.isFlipped2} flipSpeedFrontToBack={1.0}
            flipSpeedBackToFront={1.0} flipDirection="horizontal">
            <TrophyImages className="img"
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
          <button onClick={this.handleClick2}>Click to flip</button>
        </div>
        {/* End Selfie!!!! */}

        {/* Start Gym!!!! */}
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

            <TrophyEmailForm className="border" key="back">
              This is the back of the card.
          </TrophyEmailForm>
          </ReactCardFlip>
          <button onClick={this.handleClick3}>Click to flip</button>
        </div>
        {/* End Gym!!!! */}

        {/* Start Camping!!!! */}
        <div className="border addMargin">
          <ReactCardFlip className="border" isFlipped={this.state.isFlipped4} flipSpeedFrontToBack={1.0}
            flipSpeedBackToFront={1.0} flipDirection="horizontal">
            <TrophyImages
              image={image4}
              alt={"clipart of yellow tent"}
              name={"Went on the coolest camping trip!"}
              className="border" key="front">
              This is the front of the card.
          </TrophyImages>

            <TrophyEmailForm className="border" key="back"
            >
              This is the back of the card.
          </TrophyEmailForm>
          </ReactCardFlip>
          <button onClick={this.handleClick4}>Click to flip</button>
        </div>
        {/* End Camping !!!! */}

        {/* Start Movies!!!! */}
        <div className="border addMargin">
          <ReactCardFlip className="border" isFlipped={this.state.isFlipped5} flipSpeedFrontToBack={1.0}
            flipSpeedBackToFront={1.0} flipDirection="horizontal">
            <TrophyImages
              image={image5}
              alt={"clipart of 2 movie tickets"}
              name={"Saw a movie!!"}
              className="border" key="front">
              This is the front of the card.
          </TrophyImages>

            <TrophyEmailForm className="border" key="back"
            >
              This is the back of the card.
          </TrophyEmailForm>
          </ReactCardFlip>
          <button onClick={this.handleClick5}>Click to flip</button>
        </div>
        {/* End Movies !!!! */}

        {/* Start Road Trip!!!! */}
        <div className="border addMargin">
          <ReactCardFlip className="border" isFlipped={this.state.isFlipped6} flipSpeedFrontToBack={1.0}
            flipSpeedBackToFront={1.0} flipDirection="horizontal">
            <TrophyImages
              image={image6}
              alt={"clipart of a camper"}
              name={"Saw some sights on a road trip!"}
              className="border" key="front">
              This is the front of the card.
          </TrophyImages>

            <TrophyEmailForm className="border" key="back"
            >
              This is the back of the card.
          </TrophyEmailForm>
          </ReactCardFlip>
          <button onClick={this.handleClick6}>Click to flip</button>
        </div>
        {/* End Road Trip !!!! */}


      </div>
    )



  }
}

export default Trophy;