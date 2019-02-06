import React from "react";
import {Form, FormGroup, Input, Button} from "reactstrap"

function PostForm({ messageText, handleInputChange, handleFormSubmit }) {
  return (
    <Form onSubmit={handleFormSubmit} >
      <FormGroup>
        {/* <label htmlFor="Query">
          <strong>Message</strong>
        </label> */}
        <Input
          id="Title"
          className="postform-form-control"
          type="text"
          value={messageText}
          placeholder="Type here"
          name="messageText"
          onChange={handleInputChange}
          required
        />
      </FormGroup>

      <div className="pull-right">
        <Button
          type="submit"
          className="btn-md float-left"
          id="postButton"
        >
          Post
        </Button>
      </div>
    </Form>
  );
}

export default PostForm;
