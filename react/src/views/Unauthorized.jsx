import {BsExclamationTriangle} from "react-icons/bs";

const Unauthorized = () => {

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-2 text-center">
            <p>
              <BsExclamationTriangle size={80}/>
              <br />
              Status Code: 403
            </p>
          </div>
          <div className="col-md-10">
            <h3>OPPSSS!!!! Sorry...</h3>
            <p>
              Sorry, your access is refused due to security reasons of our
              server and also our sensitive data.
              <br />
              Please go back to the previous page to continue browsing.
            </p>
            <a className="btn btn-danger" href="javascript:history.back()">
              Go Back
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
