import React from "react";
import "./Error.css";

const Error = ({ toggleModal }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={toggleModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title has-text-centered has-text-weight-semibold">
            <span className="icon">
              <i className="em em-expressionless" />
            </span>
          </p>
          <button className="delete" onClick={toggleModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            <div className="is-centered">
              <p className="has-text-centered has-text-danger has-text-weight-medium">
                Oh boy! Is that image link even valid?
              </p>
            </div>
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

export default Error;
