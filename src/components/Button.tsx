import React, { useState } from 'react';

// styles for the button
const buttonStyle = {
  backgroundColor: "red",
  color: "white",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
  border: "none",
  borderRadius: "5px",
  padding: "4px 8px"
}

const activeStyle = {
  ...buttonStyle,
  color: "black",
  backgroundColor: "lime"
}

interface Props {
  text: string;
}

// button component for a toggle button
const Button = ({text}:Props) => {
  let [isActive, setIsActive] = useState(false);

  return (
    <button style={isActive ? activeStyle : buttonStyle} onClick={() => setIsActive(!isActive)}>{text}:{isActive ? "on":"off"}</button>
  )
}

export default Button