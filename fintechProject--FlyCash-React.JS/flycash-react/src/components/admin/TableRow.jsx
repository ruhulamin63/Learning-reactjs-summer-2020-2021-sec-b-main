//import "../../../black/css/black-dashboard.css";
// import "../../App.css";
import React from "react";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";

const TableRow = ({ id, email, phone, nid, transaction_status }) => {
  var buttonName = "";
  if (transaction_status == "blocked") {
    buttonName = "Unblock";
  } else {
    buttonName = "Block";
  }
  return (
    <tbody>
      <tr>
        <th>{id}</th>
        <th>{email}</th>
        <th>{phone}</th>
        <th>{nid}</th>
        <td>
          <Link
            to={`/admin-editCustomer/${id}`}
            className="btn btn-success btn-sm"
          >
            Edit
          </Link>{" "}
        </td>
        <td>
          <button className="btn btn-primary btn-sm float-end">
            {buttonName}
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default TableRow;
