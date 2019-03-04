import React, { Component } from "react";
import ButtonDanger from "../../shared/buttons/delete";

class ControlPanel extends Component {
  state = {
    done: true
  };

  render() {
    const onClear = () => {
      this.props.deleteAll();
    };
    return (
      <div className="margin-left-auto control-panel">
        <div className="checkbox-input">
          <div>
            <input
              className="done-input"
              type="checkbox"
              checked={this.state.done}
              onChange={event => {
                this.setState({ done: event.target.checked });
                this.props.changeDoneItemsVisibility(event.target.checked);
              }}
            />
            <label>DONE</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={event => this.props.todoItems(event.target.value)}
            />
            <label>TO DO</label>
          </div>
        </div>
        <div className="clear-btn">
          <ButtonDanger title="Clear" onClick={onClear} />
        </div>
      </div>
    );
  }
}

export default ControlPanel;
