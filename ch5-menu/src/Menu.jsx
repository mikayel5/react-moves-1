import React, { Component } from "react";
import Link from "./Link";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }))
      .then((json) => console.log(json));
  }

  render() {
    return (
      <div>
        {this.state.users.map((user) => {
          return (
            <div>
              <Link label={user.name} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Menu;
