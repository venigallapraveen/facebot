import React from "react";
import axios from "../../utils/axios";
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      errorMessage: "",
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignIn = () => {
    let body = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
    };
    axios
      .post("/register", body)
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.setState({
            errorMessage: "",
          });
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        } else {
          this.setState({
            errorMessage: `Cmmn. It's not an exam. You gotta fill all those details.`,
          });
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <p className="help is-danger">{this.state.errorMessage}</p>
              <div className="field">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <div className="control">
                  <input
                    className="input is-primary"
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.onNameChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="email-address">
                  Email
                </label>
                <div className="control">
                  <input
                    className="input is-primary"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <div className="control">
                  <input
                    className="input is-primary"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
              </div>

              <div className="field columns is-centered">
                <div className="control column is-half">
                  <button
                    style={{ margin: "auto" }}
                    className="button is-primary"
                    onClick={this.onSubmitSignIn}
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </div>
            </fieldset>

            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange("signin")}
                className="f6 link underline dim black db pointer"
              >
                SignIn
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
