import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      age: this.props.user.age,
      status: this.props.user.status
    };
  }

  onProfileUpdate = data => {
    fetch(
      `https://praveen-fserver.herokuapp.com/profile/${this.props.user.id}`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: window.sessionStorage.getItem("token")
        },
        body: JSON.stringify({
          formInput: data
        })
      }
    )
      .then(resp => {
        if (resp.status === 200 || resp.status === 304) {
          this.props.toggleModal();
          this.props.loadUser({ ...this.props.user, ...data });
        }
      })
      .catch(console.log);
  };

  onFormChange = event => {
    switch (event.target.name) {
      case "user-name":
        this.setState({ name: event.target.value });
        break;
      case "user-age":
        this.setState({ age: event.target.value });
        break;
      case "user-status":
        this.setState({ status: event.target.value });
        break;
      default:
        return;
    }
  };

  render() {
    const { toggleModal, user } = this.props;
    const { name, age, status } = this.state;
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={toggleModal} />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title has-text-centered has-text-weight-semibold">
              Profile
            </p>
            <button className="delete" onClick={toggleModal} />
          </header>
          <section className="modal-card-body">
            <div className="content">
              <div>
                <div className="columns is-centered">
                  <div className="column is-half ">
                    <figure
                      className=" image is-96x96 "
                      style={{ margin: "auto" }}
                    >
                      <img
                        className="is-rounded"
                        id="inputimage"
                        alt="profile"
                        src="https://api.adorable.io/avatars/120/abott@adorable.png"
                      />
                    </figure>
                  </div>
                </div>

                <div className="has-text-centered">
                  <p className="title is-3 is-spaced">{name}</p>

                  <p className="subtitle is-5 is-spaced">
                    Images scanned:
                    <span className="tag is-light is-medium">
                      {user.entries}
                    </span>
                  </p>
                  <p className="subtitle is-5 is-spaced">
                    Joined on:
                    <span className="tag is-light is-medium">{` ${new Date(
                      user.joined
                    ).toLocaleDateString()}`}</span>
                  </p>
                </div>
              </div>

              <hr />

              <div className="field">
                <label className="label" htmlFor="user-name">
                  Name
                </label>
                <div className="control">
                  <input
                    className="input is-primary"
                    onChange={this.onFormChange}
                    type="text"
                    name="user-name"
                    placeholder={name}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="user-age">
                  Age
                </label>
                <div className="control">
                  <input
                    className="input is-primary"
                    onChange={this.onFormChange}
                    type="text"
                    name="user-age"
                    placeholder={age}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="user-status">
                  status
                </label>
                <div className="control">
                  <input
                    className="input is-primary"
                    onChange={this.onFormChange}
                    type="text"
                    name="user-status"
                    placeholder={status}
                  />
                </div>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <div className="field is-grouped">
              <div className="control">
                <button
                  className="button is-primary"
                  onClick={() => this.onProfileUpdate({ name, age, status })}
                >
                  <span className="icon is-small">
                    <i className="fas fa-check" />
                  </span>
                  <span>Save</span>
                </button>
              </div>
              <div className="control">
                <button
                  className="button is-danger is-outlined"
                  onClick={toggleModal}
                >
                  <span>Cancel</span>
                  <span className="icon is-small">
                    <i className="fas fa-times" />
                  </span>
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Profile;
