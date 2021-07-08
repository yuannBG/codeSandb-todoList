import { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    clients: [],
    newClient: ""
  };
  onChange = (event) => {
    const value = event.currentTarget.value;
    this.setState({ newClient: value });
  };
  onDell = (id) => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex((client) => client.id === id);
    clients.splice(index, 1);
    this.setState({ clients });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    const clients = this.state.clients.slice();
    const id = new Date();
    const name = this.state.newClient;
    clients.push({ id, name });
    this.setState({ clients, newClient: "" });
  };
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
        <ul>{client}</ul>
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.newClient}
            onChange={this.onChange}
            placeholder="Add new client here !"
          />
          <button>Add new</button>
        </form>
      </div>
    );
  }
}
export default App;
