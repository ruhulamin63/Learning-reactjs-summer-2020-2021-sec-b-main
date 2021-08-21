import React, { useEffect, useState } from "react";
import "../../../App.css";
import { useParams } from "react-router";

import Footer from "../../layouts/footer";
import NavBar from "../../layouts/navbars/CustomerNavbar";
import AdminsSidebar from "../../layouts/sidebar/adminsSidebar";
import { useHistory } from "react-router-dom";

import campaignPNG from "../../../black/img/admin/campaign.png";

const AddCampaign = ({
  status,
  addCampaignCallback,
  updateCampaignCallback,
}) => {
  let history = useHistory();
  const { id: eid } = useParams();
  const initialState = { title: "", description: "", sdate: "", edate: "" };
  const [campaign, setCampaign] = useState(initialState);

  const handleInputChange = (event) => {
    const { title, value } = event.target;

    setCampaign({ ...campaign, [title]: value });
  };

  useEffect(() => {
    fetch("http://localhost:8000/api/admin/addCampaign" + eid).then(
      (response) => {
        response.json().then((result) => {
          console.warn(result);
          setCampaign({
            title: result.title,
            description: result.description,
            sdate: result.sdate,
            edate: result.edate,
          });
        });
      }
    );
  }, []);
  return (
    <div className="wrapper">
      <AdminsSidebar />
      <div className="main-panel ps">
        <NavBar />
        <div className="content">
          <div className="d-flex justify-content-center">
            <div className="col-md-4">
              <div className="card card-user">
                <div className="card-body">
                  <p className="card-text">
                    <div className="author">
                      <div className="block block-one"></div>
                      <div className="block block-two"></div>
                      <div className="block block-three"></div>
                      <div className="block block-four"></div>

                      <a href="#">
                        <img
                          className="avatar"
                          src={campaignPNG}
                          alt="Campaign"
                        ></img>
                      </a>
                      <h3>Add Campaign</h3>
                    </div>
                  </p>

                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      status == "add"
                        ? addCampaignCallback(campaign)
                        : updateCampaignCallback(eid, campaign);
                      history.push("/campaign/ongoingCampaign");
                    }}
                  ></form>

                  <label>Campaign Title</label>
                  <input
                    type="text"
                    name="title"
                    value={campaign.title}
                    className="form-control"
                    onChange={handleInputChange}
                  ></input>

                  <label>Description</label>

                  <div class="input-group">
                    <div class="input-group-prepend"></div>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      name="description"
                      value={campaign.description}
                      class="form-control"
                      placeholder="Description"
                    ></input>
                  </div>

                  <label>Start Date</label>

                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="tim-icons icon-calendar-60"></i>
                      </div>
                    </div>
                    <input
                      type="date"
                      onChange={handleInputChange}
                      name="sdate"
                      value={campaign.sdate}
                      class="form-control"
                      placeholder="Start Date"
                    ></input>
                  </div>

                  <label>End Date</label>

                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="tim-icons icon-calendar-60"></i>
                      </div>
                    </div>
                    <input
                      type="date"
                      onChange={handleInputChange}
                      name="edate"
                      value={campaign.edate}
                      class="form-control"
                      placeholder="End Date"
                    ></input>
                  </div>
                </div>

                <div class="card-footer">
                  <button
                    type="submit"
                    value={status === "add" ? "Add" : "Update"}
                    className="btn btn-fill btn-primary"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AddCampaign;
