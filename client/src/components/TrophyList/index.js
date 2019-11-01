import React from "react";

function TrophyCard(props) {

  return (
    <div className="card-wrapper">
      <div id="card-1" className="card card-rotating text-center">

        {/* <!-- Front Side --> */}
        <div className="face front">

          {/* <!-- Image--> */}
          <div className="card-up">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg" alt="Image with a photo of clouds." />
          </div>

          {/* <!-- Avatar --> */}
          <div className="avatar mx-auto white"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" className="rounded-circle"
            alt="Sample avatar image." />
          </div>

          {/* <!-- Content --> */}
          <div className="card-body">
            <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
            <p className="font-weight-bold blue-text">Web developer</p>

            {/* <!-- Triggering button --> */}
            <a className="rotate-btn" data-card="card-1"><i className="fas fa-redo-alt"></i> Click here to rotate</a>
          </div>
        </div>
        {/* <!-- Front Side --> */}

        {/* <!-- Back Side --> */}
        <div className="face back">
          <div className="card-body">

            {/* <!-- Content --> */}
            <h4 className="font-weight-bold mb-0">About me</h4>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat tenetur odio suscipit non commodi vel
              eius veniam maxime?
        </p>
            <hr />

            {/* <!-- Social Icons --> */}
            <ul className="list-inline py-2">
              <li className="list-inline-item"><a className="p-2 fa-lg fb-ic"><i className="fab fa-facebook-f"></i></a></li>
              <li className="list-inline-item"><a className="p-2 fa-lg tw-ic"><i className="fab fa-twitter"></i></a></li>
              <li className="list-inline-item"><a className="p-2 fa-lg gplus-ic"><i className="fab fa-google-plus-g"></i></a></li>
              <li className="list-inline-item"><a className="p-2 fa-lg li-ic"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>

            {/* <!-- Triggering button --> */}
            <a className="rotate-btn" data-card="card-1"><i className="fas fa-undo"></i> Click here to rotate back</a>

          </div>
        </div>
        {/* <!-- Back Side --> */}

      </div>
    </div>
  )
  {/* <!-- Rotating card --> */ }
}

export default TrophyCard;