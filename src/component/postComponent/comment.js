import React, { Component, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { POST_COMMENT } from "../../redux/actions/postAction";

const Comment = props => {
  const [CommentText, SetComment] = useState({ commentTempText: "" });

  const AllData = useSelector(state => state.post);
  const UserInfo = useSelector(state => state.user);
  const dispatch = useDispatch();

  const findPost = AllData.Posts.find(res => res.id == props.id);

  function commentSubmit(e) {
    e.preventDefault();
    console.log(CommentText.commentTempText);
    dispatch(POST_COMMENT(props.id, CommentText.commentTempText));
  }

  function commentValue(e) {
    CommentText = e.target.value;
  }
  return (
    <>
      {findPost.comment.slice(0, 5).map((item, index) => {
        return (
          <div key={index} className="p-3">
            <hr />
            <h5>{UserInfo.CurrentUserName}</h5>
            <p>{item}</p>
            <hr />
          </div>
        );
      })}
      <div
        className="commentSection p-3 d-none"
        id={"commentSection_" + "comnt" + props.id}
      >
        <Form onSubmit={e => commentSubmit(e)}>
          <Form.Group controlId="comment">
            <Form.Label>Write Your Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              onChange={e => SetComment({ commentTempText: e.target.value })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Comment;
