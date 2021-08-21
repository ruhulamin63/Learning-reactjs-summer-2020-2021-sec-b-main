import React from "react";
import Footer from "./layouts/footer";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="wrapper">
      <div className="main-panel ps">
        <nav class="navbar navbar-expand-lg navbar-absolute navbar-transparent fixed-top">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-bar navbar-kebab"></span>
              <span class="navbar-toggler-bar navbar-kebab"></span>
              <span class="navbar-toggler-bar navbar-kebab"></span>
            </button>
            <div class="collapse navbar-collapse" id="navigation">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <Link to="/customer-dashboard" class="nav-link text-primary">
                    <i class="tim-icons icon-minimal-left"></i> Back to
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="wrapper wrapper-full-page">
          <div className="full-page ">
            <div className="content">
              <div className=" container">
                <div class="header py-7 py-lg-8">
                  <div class="container">
                    <div class="header-body text-center mb-7">
                      <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-6">
                          <h1 class="text-white">Error 404</h1>
                          <p class="text-lead text-light">Page Not Found</p>
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
      </div>
    </div>
  );
};

export default Error404;
