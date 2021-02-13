import React from "react";

function CommentField() {
  return (
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div class="input-field col s6">
              <input
                placeholder="Name"
                id="nameInput"
                type="text"
                class="validate white-text"
              ></input>
              <label for="nameInput"></label>
            </div>
          </div>
          <div className="row">
            <div class="input-field col s6">
              <input
                placeholder="Email"
                id="emailInput"
                type="text"
                class="validate white-text"
              ></input>
              <label for="emailInput"></label>
            </div>
          </div>
          <div className="row">
            <div class="input-field col s6">
              <textarea
                placeholder="Comments"
                id="commentInput"
                class="materialize-textarea white-text"
              ></textarea>
              <label for="commentInput"></label>
            </div>
          </div>
        </form>
      </div>
      <button class="btn waves-effect waves-light" type="submit" name="action">
        Submit
        <i class="material-icons right">send</i>
      </button>
    </div>
  );
}

export default CommentField;
