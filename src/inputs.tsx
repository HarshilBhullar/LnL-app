import React from "react";

function CustomInput(props: { handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined; }) {
  return (
    <div>
      <input type="text" onChange={props.handleChange} />
    </div>
  );
}

export default CustomInput;