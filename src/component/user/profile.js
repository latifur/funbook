import React from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";
function Profile(props) {
  const userInfo = useSelector(state => state.user);
  return (
    <>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th colSpan="2" className="text-center">
              User Information
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-25">User Name</td>
            <td>{props.user.currentUser[0].username}</td>
          </tr>
          <tr>
            <td className="w-25">Email</td>
            <td>{props.user.currentUser[0].email}</td>
          </tr>
          <tr>
            <td className="w-25">Phone</td>
            <td>{props.user.currentUser[0].phone}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Profile);
