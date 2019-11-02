import React from "react";
import postAPI from "../../utils/postAPI";


function postForm(){

// document.getElementById("post-button").addEventListener("click", ()=>{
//     const titleInput = document.getElementById("input-title").value;
//     const bodyInput = document.getElementById("input-body").value;
//     const picInput = document.getElementById("input-pic").value;
//     const dateInput = document.getElementById("input-date").value;
//     const nameInput = "Colin McMahon";

// });


    return(
        <form>
            <h3>Make a Post</h3>
            <div className="form-group">
                <label for="input-title">Header</label>
                <input className="form-control" id="input-title"/>
            </div>
            <div className="form-group">
                <label for="input-body">Description</label>
                <textarea className="form-control" id="input-body"></textarea>
            </div>
            <div className="form-group">
                <label for="input-pic">Photo url</label>
                <input className="form-control" id="input-pic"/>
            </div>
            <div className="form-group">
                <label for="input-date">Date</label>
                <input className="form-control" id="input-date"/>
            </div>
            <button type="submit" class="btn btn-primary mb-2" id="post-button">Post!</button>
        </form>
    )
}

export default postForm;