import React from "react";

function Form({ /*q,*/ handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          // value={q}
          placeholder="Type here"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-md  float-right"
          id="postButton"
        >
          Post
        </button>
      </div>
    </form>
  );
}

export default Form;
