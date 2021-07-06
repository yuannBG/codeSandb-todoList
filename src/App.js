import { React, Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    clients: [
      { id: 1, name: "Od KP" },
      { id: 2, name: "Al KP" },
      { id: 3, name: "Roma KP" }
    ]
  };

  onDell = (id) => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex((client) => client.id === id);
    clients.splice(index, 1);
    this.setState({ clients });
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
        <ul>{client} </ul>

        <br />
        <br />
        <input placeholder="Add new client here !" />
        <button>Add clientc !</button>
      </div>
    );
  }
}
export default App;
