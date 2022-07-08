import React, { Component } from "react";

class NewNote extends Component {
  render() {
    return (
      <div className="note-container">
        <h1 className="note_heading">My Note</h1>

        <form className="form">
          <input required type="text" placeholder="Enter Note Title" />
          <br />
          <br />
          <textarea required rows="5" cols="28" placeholder="Enter Note" />
          <br />
          <br />
          <button>Note</button>
        </form>
      </div>
    );
  }
}
export default NewNote;
