const randomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };
  
  const randomColor = () => {
    return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
  };
  
  const generateColors = (num) => {
    const colors = [];
  
    for (let i = 0; i < num; i++) {
      colors.push(randomColor());
    }
  
    return colors;
  };
  
  const changeBoxColor = (colors, index) => {
    const newColors = [...colors];
    let newColor = randomColor();
  
    while (newColor === colors[index]) {
      newColor = randomColor();
    }
  
    newColors[index] = newColor;
    return newColors;
  };
  
  const helper = {
    generateColors,
    changeBoxColor,
  };
  
  export default helper;