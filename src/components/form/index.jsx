import React from "react";
import ButtonSuccess from "../../shared/buttons/success";

const Form = function(props) {
  const inputRef = React.createRef();

  const onSubmit = () => {
    props.addItem(inputRef.current.value);
    inputRef.current.value = "";
  };

  const handleKeyPress = ({ key }) => {
    if (key === "Enter") onSubmit();
  };

  return (
    <div className="form-wrapper">
      <input
        className="input"
        type="text"
        ref={inputRef}
        onKeyPress={handleKeyPress}
        placeholder="Please type here..."
      />
      <ButtonSuccess title="Add new item" onClick={onSubmit} />
    </div>
  );
};

export default Form;
