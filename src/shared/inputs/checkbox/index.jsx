import React, { Fragment } from "react";

const Checkbox = ({ onChange, item: { done, id, title } }) => {
  return (
    <Fragment>
      <input
        className="list-checkbox"
        onChange={onChange}
        type="checkbox"
        checked={done}
        id={id}
      />
      <label onClick={onChange}>{title}</label>
    </Fragment>
  );
};

export default Checkbox;
