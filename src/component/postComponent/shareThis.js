import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { IoMdShareAlt } from "react-icons/io";
import Picture from "./picture";

function ShareThis(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-link" variant="link" onClick={handleShow}>
        <IoMdShareAlt />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="h5">Share</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Picture ImgUrl={props.ImgUrl} />
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShareThis;
