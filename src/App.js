import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Profile from "./components/Profile/Profile";
import Modal from "./components/Modal/Modal";
import "./App.css";

const initialState = {
  input: "",
  imageUrl: "",
  route: "signin",
  isProfileOpen: false,
  isSearchOpen: false,
  isSignedIn: false,
  age: "",
  gender: "",
  type: "",
  ai_age: "",

  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
    age: 0,
    status: ""
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    const token = window.sessionStorage.getItem("token");
    if (token) {
      fetch("https://praveen-fserver.herokuapp.com/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data && data.id) {
            fetch(`https://praveen-fserver.herokuapp.com/${data.id}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: token
              }
            })
              .then(response => response.json())
              .then(user => {
                if (user && user.email) {
                  this.loadUser(user);
                  this.onRouteChange("home");
                }
              });
          }
        })
        .catch(console.log);
    }
  }

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
        age: data.age,
        status: data.status
      }
    });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch("https://praveen-fserver.herokuapp.com/imageurl", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: window.sessionStorage.getItem("token")
      },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch("https://praveen-fserver.herokuapp.com/image", {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: window.sessionStorage.getItem("token")
            },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(console.log);
        }

        const api_data = response.outputs[0].data.regions[0].data.face;
        this.setState({ age: api_data.age_appearance.concepts[0].name });
        this.setState({ ai_age: api_data.age_appearance.concepts[0].name });
        this.setState({
          gender: api_data.gender_appearance.concepts[0].name
        });
        this.setState({
          type: api_data.multicultural_appearance.concepts[0].name
        });
      })
      .catch(err => console.log(err));
  };

  onRouteChange = route => {
    if (route === "signout") {
      return this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  toggleModal = () => {
    this.setState(state => ({
      ...state,
      isProfileOpen: !state.isProfileOpen
    }));
  };

  toggleModalOnSeacrh = () => {
    this.setState(state => ({
      ...state,
      isSearchOpen: !state.isSearchOpen
    }));
  };

  render() {
    const {
      isSignedIn,
      imageUrl,
      route,
      isProfileOpen,
      isSearchOpen,
      user
    } = this.state;
    return (
      <div className="App">
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
          toggleModal={this.toggleModal}
        />
        {isProfileOpen && (
          <Modal>
            <Profile
              isProfileOpen={isProfileOpen}
              toggleModal={this.toggleModal}
              user={user}
              loadUser={this.loadUser}
            />
          </Modal>
        )}
        {route === "home" ? (
          <div>
            {isSearchOpen && (
              <Modal>
                <Rank
                  toggleModal={this.toggleModalOnSeacrh}
                  imageUrl={imageUrl}
                  age={this.state.age}
                  ai_age={this.state.ai_age}
                  gender={this.state.gender}
                  type={this.state.type}
                />
              </Modal>
            )}

            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
              toggleModal={this.toggleModalOnSeacrh}
            />
          </div>
        ) : route === "signin" ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
