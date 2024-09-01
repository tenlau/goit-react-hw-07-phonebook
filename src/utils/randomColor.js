// src/utils/randomColor.js
const randomColor = () => {
  const colors = [
    '#4caf50',
    '#2196f3',
    '#ff9800',
    '#f44336',
    '#9c27b0',
    '#00bcd4',
    '#8bc34a',
    '#ffc107',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default randomColor;
