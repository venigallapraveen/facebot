import React from "react";
import FaceRecognition from "../FaceRecognition/FaceRecognition";
import Error from "../Error/Error";

const Rank = ({ toggleModal, imageUrl, age, ai_age, gender, type }) => {
  if (gender) {
    return (
      <section className="section">
        <div className="container">
          <FaceRecognition
            toggleModal={toggleModal}
            title="Report"
            age={age}
            ai_age={ai_age}
            gender={gender}
            type={type}
            imageUrl={imageUrl}
          />
        </div>
      </section>
    );
  } else {
    return (
      <section className="section">
        <div className="container">
          <Error toggleModal={toggleModal} />
        </div>
      </section>
    );
  }
};

export default Rank;
