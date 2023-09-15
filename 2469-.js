// https://leetcode.com/problems/convert-the-temperature/

var convertTemperature = function (celsius) {
  const kelvin = celsius + 273.15;
  const fahrenheit = celsius * 1.8 + 32.0;

  // Round the results to five decimal places
  const roundedKelvin = Math.round(kelvin * 100000) / 100000;
  const roundedFahrenheit = Math.round(fahrenheit * 100000) / 100000;

  return [roundedKelvin, roundedFahrenheit];
};
