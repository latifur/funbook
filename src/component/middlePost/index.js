import React from "react";
import { Card, Button, Badge, Form } from "react-bootstrap";

import { IoMdThumbsUp, IoMdText, IoMdShareAlt } from "react-icons/io";

import { useSelector, useDispatch } from "react-redux";
import { LOAD_MORE, LIKE } from "../../redux/actions/postAction";
import Picture from "../postComponent/picture";
import Comment from "../postComponent/comment";
import ShareThis from "../postComponent/shareThis";

function MiddlePost() {
  const AllData = useSelector(state => state.post);
  const dispatch = useDispatch();
  console.log("this array is: ", AllData.Posts);

  function loadMore() {
    dispatch(LOAD_MORE(0));
  }

  function increaseLike(event) {
    const targetId = event;
    console.log("clicked", targetId);
    dispatch(LIKE(targetId));
  }

  function showComment(e) {
    const ButtonId = e;
    console.log(ButtonId);
    const commentId = "commentSection_" + ButtonId;
    const commentItem = document.getElementById(commentId);
    commentItem.classList.remove("d-none");
  }

  let photos = [];
  const allPost = AllData.Posts.map((item, index) => {
    return (
      <Card key={index} className="mb-4">
        <Picture ImgUrl={item.url} alt="picture" key={index} />
        {/* <GalleryI photos={photos} direction={"column"} /> */}
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.text}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-right">
          <Button
            className="btn btn-link"
            variant="link"
            id={"comnt" + item.id}
            onClick={() => showComment("comnt" + item.id)}
          >
            <IoMdText />
          </Button>
          <Button
            className="btn btn-link"
            variant="link"
            id={item.id}
            onClick={() => increaseLike(item.id)}
          >
            <IoMdThumbsUp /> <Badge variant="light">{item.like}</Badge>
          </Button>
          <ShareThis
            key={index}
            ImgUrl={item.url}
            title={item.title}
            text={item.text}
          />
        </Card.Footer>
        <Comment id={item.id} />
      </Card>
    );
  });

  return (
    <>
      {allPost}
      <button onClick={() => loadMore()}>Load More</button>
    </>
  );
}

export default MiddlePost;
