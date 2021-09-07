import React from "react";
import Footer from "./layouts/footer";
import GuestNav from "./layouts/navbars/guestNav";

const welcome = () => {
  return (
      <div>
      <GuestNav/>
    <div className="wrapper wrapper-full-page">
      <div className="full-page ">
        <div className="content">
          <div className=" container">
            <div class="header py-7 py-lg-8">
              <div class="container">
                <div class="header-body text-center mb-7">
                  <div class="row justify-content-center">
                    <div class="col-lg-5 col-md-6">
                      <h1 class="text-white">Welcome To FlyCash!</h1>
                      <p class="text-lead text-light">Make Your Money Fly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
    </div>
  );
};

export default welcome;
