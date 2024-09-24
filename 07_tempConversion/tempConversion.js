// Celcius to Fahrenheit : x °C ≘ (x × ⁠(9/5)⁠ + 32)°F

// Fahrenheit to Celcius :x °F ≘ (x − 32) ×(5/9⁠) °C

const convertToCelsius = function(num) {
  let conversion = 0;

  conversion = (num - 32) * (5/9);
  conversionRounded = Math.round(conversion * 10) / 10;

  console.log(`${num}°F  converted to Celsius is : ${conversionRounded}°C`);
  return conversionRounded;
  
};

const convertToFahrenheit = function(num) {
  let conversion = 0;

  conversion = num * (9/5) + 32;
  conversionRounded = Math.round(conversion * 10) / 10;

  console.log(`${num}°C converted to Fahrenheit is : ${conversionRounded}°F`);
  return conversionRounded;
  };
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
