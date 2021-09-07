//import "../../../black/css/black-dashboard.css";
// import "../../App.css";
import React from "react";
import { Link } from "react-router-dom";

const CampaignTable = ({ title, sdate, edate, description, id }) => {
  return (
    <tbody>
      <tr>
        <th>{title}</th>
        <th>{sdate}</th>
        <th>{edate}</th>
        <th>{description}</th>
        <td>
          <Link
            to={`/admin-removeCampaign/${id}`}
            className="btn btn-success btn-sm"
          >
            Remove
          </Link>{" "}
        </td>
      </tr>
    </tbody>
  );
};

export default CampaignTable;
