import React from "react";

// front of card

function TrophyImages(props) {
    return (
    <div className="card">
        <img src={props.image} className="card-img-top" alt={props.alt} />
            <div className="card-body">
                <p className="card-title" {...props.name}></p>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
    </div>
    )
}
        
export default TrophyImages;