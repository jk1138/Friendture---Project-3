import React, { Component } from "react";



// front of card

class TrophyImages extends Component {
    render (props) {
    return (
    <div className="card" id={this.props.check}>
        <img src={this.props.image} className="card-img-top" alt={this.props.alt} />
            <div className="card-body">
                <p className="card-title">{this.props.name}</p>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>

    </div>
    )
    }
}
        
export default TrophyImages;