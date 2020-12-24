import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-5">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-0 order-lg-1">
                <h1>{props.name}</h1>
                <h2 className="my-3">
          
                  This is a center university of Hyderabad page
                </h2>
                <div className="mt-3">
                  <NavLink to={props.visit} className="btn-get-started">
                    {props.btname}
                  </NavLink>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img
                  src={props.imgsrc}
                  className="img-fluid animated"
                  alt="Commonimg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Common;
