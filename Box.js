import React from 'react';


const Box = ({ color, index, changeColor }) => {
  return (
    <div
      className="box"
      style={{ backgroundColor: color }}
      onClick={() => changeColor(index)}
    />
  );
};

export default Box;