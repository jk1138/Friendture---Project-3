import React, { Component } from "react";
import "./style.css"
import { spawnSync } from "child_process";
function LandingPage() {
  return (
    <div class="container">
      <div class=" col-md-12 col-sm-12 mb-4" id="sectionOne">
        <div class="card-fluid text-white">
          <br></br>
          <div class="writing">
            <h2 class="content">Welcome to Friendture</h2>
            <p>Our goal at Friendture is less about keeping you online and keeping out out in the world with your friends. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat sem non porta suscipit. Sed ex nisi, bibendum vitae feugiat vel, suscipit at ante. Pellentesque in sem non odio vulputate vulputate vel eu mi. Maecenas vehicula pharetra quam, ac blandit urna iaculis finibus. Integer libero nisi, convallis in semper in, egestas a orci. Phasellus metus nunc, auctor eu erat sed, mattis maximus eros. Curabitur et tellus consequat, ornare eros non, bibendum lacus. Proin nisl diam, finibus ornare leo sit amet, mattis pulvinar turpis. Sed a ante ut lectus lobortis mattis. Cras sagittis blandit justo vitae pretium. Mauris non tortor non purus elementum accumsan. Ut sit amet vulputate nisi. Fusce quis urna molestie, interdum justo eget, tempus mi. Mauris ut enim tortor.</p>
          </div>
        </div>
      </div>
      <div class="card mb-3">
          <img src="image1.png" alt= "" id="jane" width= "auto" height ="400"></img>
            <div class="card-body">
              <h5 class="card-title">Jane's Testimonial:</h5>
              <p class="card-text"><small class="text-muted">Duis sit amet risus sed ex tempus accumsan et in justo. Nam pharetra lacinia vehicula. Sed maximus dolor non lacus lacinia, et rhoncus libero cursus. Phasellus ultricies elementum orci, id gravida turpis vulputate a. Nulla a faucibus sem. Curabitur sit amet efficitur ante. Mauris laoreet faucibus elit ut luctus. Aenean sed lorem non diam feugiat viverra eget eget diam.</small></p>
            </div>
        </div>
      <div class="card-group" id="sectionTwo">
        <div class="card Text-white bg-warning mb-3" >
          <div class="card-body" id="icons">
            <h1 class="card-title"><i class="fa fa-trophy" ></i></h1>
            <p class="card-text">Trophies to Collect</p>
            <p>In non nunc sollicitudin, luctus erat non, ultrices sapien. Duis lobortis dui non mi facilisis, ut vulputate urna molestie. Integer id magna arcu. Morbi sagittis nunc et felis sagittis, id fringilla lacus rutrum. </p>
          </div>
        </div>
        <div class="card text-white bg-info mb-3">
          <div class="card-body" id="icons">
            <h1 class="card-title"><i class="fa fa-users"></i></h1>
            <p class="card-text">Connect with Friends</p>
            <p>Etiam bibendum, mauris id eleifend congue, ex sem pulvinar dolor, in pharetra sapien sapien et diam. Praesent a tortor ut massa sodales gravida quis a metus.</p>
          </div>
        </div>
        <div class="card Text-white bg-warning mb-3">
          <div class="card-body" id="icons">
            <h1 class="card-title"><i class="fa fa-google"></i></h1>
            <p class="card-text">Use Google to Create an Account</p>
            <p>Fusce et laoreet ligula. Aliquam ultrices, diam nec pellentesque sollicitudin, elit quam vehicula est, non feugiat nisi urna id erat. Sed sed vehicula justo. Aenean convallis leo id mattis feugiat.</p>
          </div>
        </div>
      </div>  
      <br></br>
      <br></br>      
      <br></br>
      <br></br>
    <ul class="list-unstyled">
    <li class="media">
      <img src="http://www.outsourcecio.co.za/images/tim-profile-pic-round.png" class="mr-3" alt=""></img>
      <div class="media-body">
        <h5 class="mt-0 mb-1">John's Exprience with Friendture</h5>
        "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      </div>

    </li>
    <li class="media my-4">
      <img src="http://www.abbieterpening.com/wp-content/uploads/2013/10/profile-pic-round-200px.png" class="mr-3" alt="..."></img>
      <div class="media-body">
        <h5 class="mt-0 mb-1">Linda's Experience with Friendture</h5>
        "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      </div>
    </li>
    <li class="media">
      <img src="https://digitalnomadgirls.com/wp-content/uploads/2016/10/DNG-round-profile-pics.png" class="mr-3" alt="..."></img>
      <div class="media-body">
        <h5 class="mt-0 mb-1">Shannon's Experience with Friendture</h5>
        "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      </div>
    </li>
    </ul>
    <br></br>
    <br></br>
    <br></br>
  <div class="card " >
  <img src="./images/lastimage.jpeg" class="card-img" id="lastimage" alt="" width= "auto" height ="650"></img>
  <div class="card-img-overlay">
  <br></br>

    <h1 class="display-4">So start your adventure </h1>
    <h1 class= "display-4">with Friendture today...</h1>
  </div>
</div>
  </div>
  )
}
export default LandingPage;