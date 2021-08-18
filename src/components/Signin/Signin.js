import React from "react";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
      errorMessage: ""
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  saveAuthTokenInSessions = token => {
    window.sessionStorage.setItem("token", token);
  };

  onSubmitSignIn = () => {
    fetch("https://praveen-fserver.herokuapp.com/signin", {
       mode: "no-cors",
      method: "post",
      headers: { "Content-Type": "application/json","Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    }).then(response => {
  return response.text()
}).then((data) => {
  resolve(data ? JSON.parse(data) : {})
}).then(data => {
        if (data && data.success === "true") {
          this.setState({
            errorMessage: ""
          });
          this.saveAuthTokenInSessions(data.token);
          this.props.loadUser(data.user);
          this.props.onRouteChange("home");
        } else {
          this.setState({
            errorMessage: "Sorry Pal. You messed up something big!"
          });
        }
      })
      .catch(console.log);
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <p className="help is-danger">{this.state.errorMessage}</p>
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
                    Sign in
                  </button>
                </div>
              </div>
            </fieldset>

            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange("register")}
                className="f6 link underline dim black db pointer"
              >
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;
