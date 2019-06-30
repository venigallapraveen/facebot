import React from "react";

const ImageLinkForm = ({
  onInputChange,
  onButtonSubmit,
  toggleModal,
  inputValue
}) => {
  return (
    <div>
      <section id="home" className="section is-white is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <div>
                  <span className="icon is-primary">
                    <i className="far fa-user-circle fa-pulse fa-5x" />
                  </span>
                </div>
                <h1 className="subtitle is-2 has-text-weight-light">
                  <strong className="has-text-primary">AI</strong> FaceBot
                </h1>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="field is-grouped">
                <p className="control is-expanded">
                  <input
                    id="mainInput"
                    className="input is-primary"
                    onChange={onInputChange}
                    value={inputValue}
                    type="text"
                    placeholder="Paste the link here"
                  />
                </p>
                <p className="control">
                  <button
                    className="button is-primary"
                    onClick={() => {
                      onButtonSubmit();
                      toggleModal();
                    }}
                  >
                    <span className="icon">
                      <i className="fas fa-gavel" />
                    </span>
                    <span>Smack</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <h4 className="subtitle has-text-primary is-5 has-text-weight-light has-text-centered arrow bounce">
              Created By <i className="em em-point_down" />
            </h4>
            <h4 className="subtitle is-5  has-text-weight-medium has-text-centered">
              Praveen Venigalla
            </h4>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ImageLinkForm;
