import React, { useEffect, useState } from "react";
import "../../../App.css";
import Footer from "../../layouts/footer";
import NavBar from "../../layouts/navbars/CustomerNavbar";
import AdminsSidebar from "../../layouts/sidebar/adminsSidebar";
// import TableRow from "../TableRow";
import { Link } from "react-router-dom";

const CustomerList = () => {
  const TableRow = ({ name, email, phone, nid }) => {
    return (
      <tbody>
        <tr>
          <th>{name}</th>
          <th>{email}</th>
          <th>{phone}</th>
          <th>{nid}</th>
        </tr>
      </tbody>
    );
  };
  const [customerList, setAllCustomer] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/admin/customerList").then((response) => {
      response.json().then((result) => {
        setAllCustomer(result);
      });
    });
  }, []);

  return (
    <div className="pdf">
      <AdminsSidebar />
      <div className="main-panel ps">
        <NavBar />
        <div className="content">
          <div className="row">
            <div className="details">
              <h4>Name :Faiyaz Shahrear </h4>
              <h4>Email :faazbaba@gmail.com</h4>
              <h4>Phone :01524452187</h4>
            </div>
          </div>
          <div class="row" style={{ right: "500px" }}>
            <div class="col-md-12">
              <div class="card ">
                <div class="card-header">
                  <button
                    onClick={() => window.print()}
                    align="center"
                    type="submit"
                    class="btn btn-fill btn-primary"
                  >
                    {" "}
                    Print
                  </button>
                  <h1 class="card-title" align="center">
                    {" "}
                    Customer List
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
  );
};
export default CustomerList;
