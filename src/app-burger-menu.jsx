import * as ReactDOM from "react-dom";
import * as React from "react";
import { slide as Menu } from "react-burger-menu";
import "./burger-menu.css"

class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(
  <Example></Example>
);
