// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = "23";
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2021 - birthYear;

console.log(calcAge(1994));

// --------------------------------------------------------

// Using Google, StackOverflow and MDN

// PROBLEM 1:
/* // We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// Understanding the problem
//  - What is temp amplitude? A: difference between highest and lowest temp
//  - How to compute max and min temp?
//  - What's a sensor error? and what to do?

//  Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const caclTempAmplitude = (temps) => {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
caclTempAmplitude([3, 6, 10, 7, 1]);
const amplitude = caclTempAmplitude(temperatures);
console.log(amplitude); */

// --------------------------------------------------------

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

/* const caclTempAmplitudeNew = (t1, t2) => {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = caclTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew); */

// --------------------------------------------------------

// Debugging(Fixing Errors)
const measureKelvin = () => {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // C) Fix
    // value: Number(prompt("Degrees celsius:")),
  };

  // B) Find
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify
console.log(measureKelvin());

// Using a debugger
const caclTempAmplitudeBug = (t1, t2) => {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = caclTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) Identify
console.log(amplitudeBug);

// --------------------------------------------------------

//  Coding Callenge #1
/* const printForecast = (arr) => {
  let content = "";
  for (let i = 0; i < arr.length; i++) {
    content += `... ${arr[i]}℃ in ${i + 1}days `;
  }
  return content;
};

const forecast1 = printForecast([17, 21, 23]);
const forecast2 = printForecast([12, 5, -5, 0, 4]);
console.log(forecast1);
console.log(forecast2); */

// 1) Understanding the problem
// - Array transformed to string, separeted by ...
// - What is the X days? A: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ℃
// - Strings need to contain day (index + 1)
// - Add ... between elements and start end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}℃ ... ${data1[1]}℃ ... ${data1[2]}℃ ...`);

const printForecast = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}℃ in ${i + 1}days ... `;
  }
  console.log("... " + str);
};

printForecast(data1);
printForecast(data2);
