import { Component } from "react";
import "./styles.css";

export default class App extends Component {
  state = {
    clients: [
      // {id:1, name:'od KP'}
    ],
    value: ""
  };

  onDell = (id) => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex((client) => client.id === id);
    clients.splice(index, 1);
    this.setState({ clients });
  };
  onChange = (event) => {
    const value = event.currentTarget.value;
    this.setState({ value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.value) {
      const name = this.state.value;
      const id = new Date().getTime();
      const client = { id, name };
      const clients = this.state.clients.slice();
      clients.push(client);
      this.setState({ clients, value: "" });
    } else {
      alert("tape !");
    }
  };

  addClient = () => {};

  render() {
    const client = this.state.clients.map((client) => (
      <li key={client.id}>
        {client.name} <button onClick={() => this.onDell(client.id)}>X</button>
      </li>
    ));
    return (
      <div className="lol">
        <br />
        <br />
        <br />
        <br />
        <ul>{client}</ul>
        <br />
        <br />
        <br />
        <br />
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.value}
            onChange={this.onChange}
            placeholder="Add the new client here !"
          />
          <button>Add client !</button>
        </form>
      </div>
    );
  }
}
