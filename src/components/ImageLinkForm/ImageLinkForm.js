import React from "react";
import FileBase64 from "../Base64/Base64";

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
                <div className="control is-expanded">
                  {/* <input
                    id="mainInput"
                    className="input is-primary"
                    onChange={onInputChange}
                    value={inputValue}
                    type="text"
                    placeholder="Paste the link here"
                  /> */}
                  <FileBase64 multiple={true} onDone={onInputChange} />
                </div>
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
                    <span>Submit</span>
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
            <div className="tags is-centered has-addons">
              <span className="tag is-light">Key</span>
              <span className="tag is-primary">Features</span>
            </div>

            <h4 className="title is-5  has-text-weight-bold has-text-centered">
              <span className="tag is-primary  mr-3">#FaceScanner </span>
              <span className="tag is-primary mr-3"> #Age </span>
              <span className="tag is-primary mr-3"> #Gender </span>
              <span className="tag is-primary mr-3"> #Ethnicity</span>
            </h4>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ImageLinkForm;
