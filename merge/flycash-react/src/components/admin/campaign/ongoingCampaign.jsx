import React, { useEffect, useState } from "react";
import "../../../App.css";
import Footer from "../../layouts/footer";
import NavBar from "../../layouts/navbars/CustomerNavbar";
import AdminsSidebar from "../../layouts/sidebar/adminsSidebar";
import CampaignTable from "./campaignTable";

const OngoingCampaign = () => {
  const [campaignList, setAllCampaign, deleteCallback] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/admin/ongoingCampaign").then(
      (response) => {
        response.json().then((result) => {
          setAllCampaign(result);
        });
      }
    );
  }, []);
  return (
    <div>
      <div className="wrapper">
        <AdminsSidebar />
        <div className="main-panel ps">
          <NavBar />
          <div className="content">
            <div class="row" style={{ right: "500px" }}>
              <div class="col-md-12">
                <div class="card ">
                  <div class="card-header">
                    <h1 class="card-title" align="center">
                      {" "}
                      Ongoing Campaign
                    </h1>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive-lg">
                      <table class="table tablesorter " id="">
                        <thead class=" text-primary">
                          <tr>
                            <th>Campaign Title</th>
                            <th>Released Date</th>
                            <th>End Date </th>
                            <th>Description</th>

                            <th>Action</th>
                          </tr>
                        </thead>

                        {campaignList.map((u) => {
                          return (
                            <CampaignTable
                              key={u.id}
                              {...u}
                              callback={deleteCallback}
                            />
                          );
                        })}
                      </table>
                    </div>
                  </div>
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
export default OngoingCampaign;
