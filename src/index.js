import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      loggedIn: false
    };
  }

  handleLoginClick() {
    this.setState({ loggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ loggedIn: false });
  }

  render() {
    let button;

    if (this.state.loggedIn) {
      button = <ButtonLoggedOut onClick={this.handleLogoutClick} />;
    } else {
      button = <ButtonLoggedIn onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greetings userLoggedIn={this.state.loggedIn} />
        <div>{button}</div>
      </div>
    );
  }
}

/* GREETINGS */

function GreetUser(props) {
  return "Hello, User!";
}

function GreetGuest(props) {
  return "Please log in";
}

function Greetings(props) {
  if (props.userLoggedIn) {
    return <GreetUser />;
  }

  return <GreetGuest />;
}

/*  */

function ButtonLoggedIn(props) {
  return <button onClick={props.onClick}>Log in</button>;
}

function ButtonLoggedOut(props) {
  return <button onClick={props.onClick}>Log out</button>;
}

ReactDOM.render(<App />, document.getElementById("root"));
