import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <div className="row px-5">
        <div className= "mb-3 d-flex justify-content-center">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle mb-2 mb-md-0 mx-4"
          />
          <div className="text-center text-md">
            <h2>{name}</h2>
            <p className="lead text-muted">{email}</p>
          </div>
        </div>
      </div>
      <div className="row px-5">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Profile;
