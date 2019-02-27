import React from "react";
import ButtonDanger from "../../shared/buttons/delete";

const List = props => {
  const items = props.list.map((item, index, arr) => (
    <li className="item margin-bottom" key={index}>
      <input
        className="margin-right margin-left"
        onChange={() => props.changeItemStatus(item.id)}
        type="checkbox"
        checked={item.done}
      />
      {item.title}
      <ButtonDanger
        title="Delete"
        classes="margin-left-auto"
        onClick={() => props.deleteItem(item.id)}
      />
    </li>
  ));
  return <ul className="list">{items}</ul>;
};
export default List;
