import React from "react";

const Contact = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
      </div>

      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-6 mx-auto">
            <form>
              <div class="form-group">
                <label for="name ">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Full Name"
                />
              </div>
              <div class="form-group">
                <label for="name ">Phone Number</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email id"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter Password"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your password with anyone else.
                </small>
              </div>

              <div class="form-group">
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="Message----"
                />
              </div>
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
