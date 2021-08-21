import React, { useEffect, useState } from "react";
import "../../../App.css";
import Footer from "../../layouts/footer";
import NavBar from "../../layouts/navbars/CustomerNavbar";
import AdminsSidebar from "../../layouts/sidebar/adminsSidebar";
import TableRow from "../TableRow";

const BlockCustomer = () => {
  const [customerList, setAllCustomer] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/admin/customerList").then((response) => {
      response.json().then((result) => {
        setAllCustomer(result);
      });
    });
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
                      Customer Action{" "}
                    </h1>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive-lg">
                      <table class="table tablesorter " id="">
                        <thead class=" text-primary">
                          <tr>
                            <th>name</th>
                            <th>Email</th>
                            <th>Phone </th>
                            <th>Nid</th>
                            <th>Action</th>
                          </tr>
                        </thead>

                        {customerList.map((u) => {
                          return <TableRow key={u.id} {...u} />;
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
export default BlockCustomer;
