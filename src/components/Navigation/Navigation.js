import React from "react";
import ProfileIcon from "../Profile/ProfileIcon";

const Navigation = ({ onRouteChange, isSignedIn, toggleModal }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "center" }}>
        {/* <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="f3 link dim black underline pa3 pointer"
        >
          Register
        </p> */}
        <h1 className="f3 pa3 has-text-weight-bold has-text-primary">
          AI
          <span className="has-text-black has-text-weight-medium">
            {" "}
            Facebot
          </span>
          <span className="icon">
            <i className="em em-brain" />
          </span>
        </h1>
      </nav>
    );
  }
};

export default Navigation;
