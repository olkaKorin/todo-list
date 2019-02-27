import React from 'react'
import ButtonDanger from '../../shared/buttons/delete'
import Checkbox from '../../shared/inputs/checkbox'

const List = props => {
  const items = props.list.map((item, index) => (
    <li className="item margin-bottom" key={index}>
      <Checkbox onChange={() => props.changeItemStatus(item.id)} item={item} />

      <ButtonDanger
        title="Delete"
        classes="margin-left-auto"
        onClick={() => props.deleteItem(item.id)}
      />
    </li>
  ))
  return <ul className="list">{items}</ul>
}
export default List
