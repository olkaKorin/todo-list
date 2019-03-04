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
    this.state = { list: null };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.changeItemStatus = this.changeItemStatus.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.changeDoneItemsVisibility = this.changeDoneItemsVisibility.bind(this);
    this.todoItems = this.todoItems.bind(this);
  }

  componentDidMount() {
    const arr = list.map(item => {
      item.show = true;
      return item;
    });
    this.setState({ list: arr });
  }

  render() {
    if (this.state.list) {
      return (
        <div className="app">
          <div className="header-comp">
            <Header />
          </div>
          <div className="app-list-form">
            <Form addItem={this.addItem} />
            <ControlPanel
              deleteAll={this.deleteAll}
              changeDoneItemsVisibility={this.changeDoneItemsVisibility}
              todoItems={this.todoItems}
            />
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
    const newItem = { id: Date.now(), title: val, done: false, show: true };
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

  changeDoneItemsVisibility(checked) {
    console.log(checked);
    const arr = this.state.list.map(item => {
      if (item.done) item.show = checked;
      return item;
    });
    this.setState({ list: arr });
  }

  todoItems(done) {
    const todoItems = this.state.list.filter(item => item.done !== done);
    this.setState({ list: todoItems });
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
