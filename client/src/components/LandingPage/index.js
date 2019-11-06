import React, { Component } from "react";
import "./style.css"
function LandingPage() {
  return (
    <div class="container">
      <div class=" col-md-12 col-sm-12 mb-4" id="sectionOne">
        <div class="card  text-white">
          <br></br>
          <div class="writing">
            <h2 class="content">Welcome to Friendture</h2>
            <p>Our goal at Friendture is less about keeping you online and keeping out out in the world with your friends. </p>
          </div>
        </div>
      </div>
      <div class="card-group" id="sectionTwo">
        <div class="card Text-white bg-warning mb-3" >
          <div class="card-body" id="icons">
            <h1 class="card-title"><i class="fa fa-trophy" ></i></h1>
            <p class="card-text">trophy.</p>
          </div>
        </div>
        <div class="card text-white bg-info mb-3">
          <div class="card-body" id="icons">
            <h1 class="card-title"><i class="fa fa-users"></i></h1>
            <p class="card-text">friends</p>
          </div>
        </div>
        <div class="card Text-white bg-warning mb-3">
          <div class="card-body" id="icons">
            <h1 class="card-title"><i class="fa fa-google"></i></h1>
            <p class="card-text">google-connected</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LandingPage;