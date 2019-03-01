import React from "react";
import ReactDOM from "react-dom";
// own
import "./styles/styles.scss";
import List from "./components/list";
import Form from "./components/form";
import { list } from "./consts";
import Header from "./components/header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: null };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.changeItemStatus = this.changeItemStatus.bind(this);
  }

  componentDidMount() {
    this.setState({ list });
  }

  render() {
    if (this.state.list) {
      return (
        <div className="app">
          <Header />
          <div className="app-list-form">
            <Form addItem={this.addItem} />
            <List
              deleteItem={this.deleteItem}
              list={this.state.list}
              changeItemStatus={this.changeItemStatus}
            />
          </div>
        </div>
      );
    } else {
      return <div>spinner</div>;
    }
  }

  addItem(val) {
    if (!val) return;
    const newItem = { id: Date.now(), title: val, done: false };
    this.setState({
      list: [...this.state.list, newItem]
    });
  }

  deleteItem(id) {
    const filteredList = this.state.list.filter(item => item.id !== id);
    this.setState({
      list: filteredList
    });
  }

  changeItemStatus(id) {
    const mappedList = this.state.list.map(item => {
      if (item.id === id) item.done = !item.done;
      return item;
    });
    this.setState({
      list: mappedList
    });
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
