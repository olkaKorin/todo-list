import React, { Component } from "react";
import ButtonDanger from "../../shared/buttons/delete";

class ControlPanel extends Component {
  render() {
    const onClear = () => {
      this.props.deleteAll();
    };
    return (
      <div className="margin-left-auto control-panel">
        <div className="checkbox-input">
          <div>
            <input className="done-input" type="checkbox" /> <label>DONE</label>{" "}
          </div>
          <div>
            <input type="checkbox" /> <label>TO DO</label>{" "}
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
