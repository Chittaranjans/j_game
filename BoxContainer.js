import React, { useState } from 'react';
import Box from './Box';
import helper from './helper';

const BoxContainer = () => {
  const [colors, setColors] = useState(helper.generateColors(4));

  const changeColor = (index) => {
    setColors(helper.changeBoxColor(colors, index));
  };

  return (
    <div className="box-container">
      {colors.map((color, index) => (
        <Box
          key={index}
          color={color}
          index={index}
          changeColor={changeColor}
        />
      ))}
    </div>
  );
};

export default BoxContainer;