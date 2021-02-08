const generateColorHex = () => {
    return '#' + Math.floor(Math.random()*10000000).toString(16)
};
console.log(`Color Hexa-nya ${generateColorHex()}`);