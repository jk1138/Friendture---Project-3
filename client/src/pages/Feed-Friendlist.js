import React, { Component } from "react";
import Nav from "../components/Navbar/index.js";
import postAPI from "../utils/postAPI.js";

class FriendFeed extends Component {

    state = {
        posts: [],
        title: "",
        user: "",
        date: ""
    }

    componentDidMount() {
        this.gettingPosts();
        
    }

    gettingPosts = () => {
        postAPI.getPosts().then(
            (res) => {
                console.log(res);
                this.setState({
                    posts: res.data, title: "", user: "", date: ""
                });
                this.renderPosts();
            }

        ).catch(err => console.log(err))
    };

    gettingFriends = () => {

    };

    renderPosts = () =>{
        console.log(this.state.posts);
        const postFeed = document.getElementById("postFeed");


        const thePosts = this.state.posts;

        postFeed.innerText = (thePosts[0].title);

        const theFeed = document.getElementById("theFeed");



        for(let i = 0; i < thePosts.length; i++){

            

            const newCard = document.createElement("div");
            newCard.setAttribute("class", "card");
            const cardBody = document.createElement("div");
            cardBody.setAttribute("class", "card-body");
            const cardTitle = document.createElement("h5");
            cardTitle.setAttribute("class", "card-title");
            cardTitle.textContent=(thePosts[i].title);
            const cardText = document.createElement("p");
            cardText.setAttribute("class", "card-text");
            cardText.textContent=(thePosts[i].body);
            const cardFooter = document.createElement("div");
            cardFooter.setAttribute("class", "card-footer text-muted");
            cardFooter.textContent=(thePosts[i].user + " on " +thePosts[i].date);



            if(thePosts[i].pic){
                const cardPic = document.createElement("img");
                cardPic.setAttribute("class", "card-img-top");
                cardPic.setAttribute("src", thePosts[i].pic);
                newCard.appendChild(cardPic)
            }
            else{
                const cardPic = '<img src=' + "https://designshack.net/wp-content/uploads/placeholder-image-368x246.png" + 'class="card-img-top">'
            };

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(cardFooter);

            newCard.appendChild(cardBody);

            // const theNewCard = '<div class="card" style="width: 18rem;">'+ cardPic +'<div class="card-body"><h5 class="card-title">'+thePosts[i].title+'</h5><p class="card-text">'+thePosts[i].body+'</p></div><div class="card-footer text-muted">'+thePosts[i].user + ' on ' +thePosts[i].date+'</div></div>';

            // cardArray.push(theNewCard)

            // theFeed.appendChild = theNewCard;


        }
    };

    render() {
        return (
            <div>
                <Nav />

                <div className="jumbotron justify-content-center feedBackground">
                    <h1>Feed</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">blah blah blah</div>
                        <div className="col-md-6 card-columns" id="theFeed">
                            <h3 id="postFeed"></h3>
                        </div>
                        <div className="col-md-3">Friendslist</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FriendFeed;