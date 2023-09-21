import { Link } from "react-router-dom";
import { createRef, useState } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider.jsx";
import {
  BsFillPersonFill,
  BsFillEnvelopeFill,
  BsFillLockFill,
  BsFillKeyFill,
} from "react-icons/bs";

export default function Signup() {
  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();
  const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState(null);

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };
    axiosClient
      .post("/signup", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  return (
    <div className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form onSubmit={onSubmit} className="mx-1 mx-md-4">
                      {errors && (
                        <div className="alert">
                          {Object.keys(errors).map((key) => (
                            <p key={key}>{errors[key][0]}</p>
                          ))}
                        </div>
                      )}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <BsFillPersonFill size={40} /> &nbsp;&nbsp;
                        <div className="form-outline flex-fill mb-0">
                          <input
                            ref={nameRef}
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            placeholder="Your name"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <BsFillEnvelopeFill size={40} /> &nbsp;&nbsp;
                        <div className="form-outline flex-fill mb-0">
                          <input
                            ref={emailRef}
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <BsFillLockFill size={40} /> &nbsp;&nbsp;
                        <div className="form-outline flex-fill mb-0">
                          <input
                            ref={passwordRef}
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <BsFillKeyFill size={40} /> &nbsp;&nbsp;
                        <div className="form-outline flex-fill mb-0">
                          <input
                            ref={passwordConfirmationRef}
                            type="password"
                            className="form-control"
                            placeholder="Repeat your password"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                      <p className="text-center">
                        Already registered? <Link to="/login">Sign In</Link>
                      </p>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
