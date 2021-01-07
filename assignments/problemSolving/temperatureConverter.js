const temperatureConverter = (value, unit) => {
  if (unit.toLowerCase().includes("c"))
    return `${value} ${unit} is ${(value * 9) / 5 + 32} F`;
  if (unit.toLowerCase().includes("f"))
    return `${value} ${unit} is ${((value - 32) * 5) / 9} C`;

  return "invalid data entered... Try again!";
};
