import React from "react";
import ReactDOM from "react-dom";
// own
import "./styles/styles.scss";
import List from "./components/list";
import Form from "./components/form";
import { list } from "./consts";
import Header from "./components/header";
import ControlPanel from "./components/control-panel";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: null, radio: "all" };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.changeItemStatus = this.changeItemStatus.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
  }

  componentDidMount() {
    this.setState({ list });
  }

  render() {
    const { radio } = this.state;
    if (this.state.list) {
      let list;
      if (radio === "all") list = this.state.list;
      if (radio === "done")
        list = this.state.list.filter(({ done }) => done === true);
      if (radio === "todo")
        list = this.state.list.filter(({ done }) => done === false);

      return (
        <div className="app">
          <div className="header-comp">
            <Header />
          </div>
          <div className="app-list-form">
            <Form addItem={this.addItem} />
            <ControlPanel
              deleteAll={this.deleteAll}
              filterOnlyDone={this.filterOnlyDone}
              todoItems={this.todoItems}
              radio={this.state.radio}
              onRadioInputChange={this.onRadioInputChange}
            />
            <List
              deleteItem={this.deleteItem}
              list={list}
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

  deleteAll() {
    this.setState({ list: [] });
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

  onRadioInputChange = val => this.setState({ radio: val });
}

ReactDOM.render(<App />, document.getElementById("root"));
