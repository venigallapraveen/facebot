import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({
  toggleModal,
  title,
  age,
  ai_age,
  gender,
  type,
  imageUrl
}) => {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={toggleModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title has-text-centered has-text-weight-semibold">
            {title}
          </p>
          <button className="delete" onClick={toggleModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            <div className="columns is-centered">
              <img
                id="inputimage"
                alt="search results"
                src={imageUrl}
                width="300"
                height="300"
              />
            </div>

            <table className="table is-bordered is-striped is-narrow is-hoverable">
              <tbody>
                <tr>
                  <th>
                    Age
                    <span className="icon is-primary">
                      <i className="fas fa-chart-line" />
                    </span>
                  </th>
                  <td className="has-text-primary has-text-weight-semibold">
                    {ai_age}
                  </td>
                </tr>

                <tr>
                  <th>
                    Gender
                    <span className="icon is-primary">
                      <i className="fas fa-male" />
                    </span>
                  </th>
                  <td className="has-text-primary has-text-weight-semibold">
                    {gender}
                  </td>
                </tr>
                <tr>
                  <th>
                    Ethnicity
                    <span className="icon is-primary">
                      <i className="fas fa-flag" />
                    </span>
                  </th>
                  <td className="has-text-primary has-text-weight-semibold">
                    {type}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-primary" onClick={toggleModal}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default FaceRecognition;
