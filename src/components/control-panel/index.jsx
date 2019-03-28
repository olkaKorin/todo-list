import React, { Component } from "react";
import ButtonDanger from "../../shared/buttons/delete";

class ControlPanel extends Component {
  render() {
    const onClear = () => {
      this.props.deleteAll();
    };
    return (
      <div className="margin-left-auto control-panel">
        <fieldset className="checkbox-input" id="filter">
          <label>
            <input
              value="done"
              name="filter"
              className="margin-input"
              checked={this.props.radio === "done"}
              type="radio"
              onChange={() => this.props.onRadioInputChange("done")}
            />
            Show only done items
          </label>

          <label>
            <input
              value="todo"
              name="filter"
              className="margin-input"
              type="radio"
              checked={this.props.radio === "todo"}
              onChange={() => this.props.onRadioInputChange("todo")}
            />
            Show only to do items
          </label>

          <label>
            <input
              value="all"
              name="filter"
              type="radio"
              checked={this.props.radio === "all"}
              onChange={() => this.props.onRadioInputChange("all")}
            />
            Show all
          </label>
        </fieldset>

        <div className="clear-btn">
          <ButtonDanger title="Clear" onClick={onClear} />
        </div>
      </div>
    );
  }
}

export default ControlPanel;
