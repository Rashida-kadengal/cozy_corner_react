import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <>
      <div className="container   ">
        <div className="row  m-5 w-100 ">
          <div className="col-md-6 pt-5 ">
            <img
              src="https://static.vecteezy.com/system/resources/previews/009/473/196/non_2x/online-shopping-application-illustration-concept-on-white-background-vector.jpg"
              alt="Login"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 mt-5 pt-5">
            <div>
              <h2>Welcome To Cozy-Corner</h2>
              <p>Create your account to get started</p>
            </div>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Fullname"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="Phone Number"
                />
              </div>
              <div className=" d-flex justify-conten-end align-items.center ">
                <div className="col">
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="col d-flex justify-content-end">
                  <a
                    href="#"
                    className="text-decoration-none text-dark-emphasis"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>

              <button className="btn btn-warning w-100">SignUp</button>
            </form>

            <div className="mt-3 text-center">
              <Link
                to={"/login"}
                className="text-decoration-none text-dark-emphasis"
              >
                {" "}
                Already have an account?{" "}
                <strong className="text-danger">Login</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
