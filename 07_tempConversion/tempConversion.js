// Celcius to Fahrenheit : x °C ≘ (x × ⁠(9/5)⁠ + 32)°F

// Fahrenheit to Celcius :x °F ≘ (x − 32) ×(5/9⁠) °C

const convertToCelsius = function(num) {
  let conversion = 0;

  conversion = (num - 32) * (5/9);

  console.log(`${num}°F  converted to Celsius is : ${conversion}°C`);
  return conversion;
  
};

const convertToFahrenheit = function(num) {
  let conversion = 0;

  conversion = num * (9/5) + 32;

  console.log(`${num}°C converted to Fahrenheit is : ${conversion}°F`);
  return conversion;
  };

convertToFahrenheit(100);
convertToCelsius(0);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
