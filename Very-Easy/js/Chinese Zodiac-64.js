function chineseZodiac(birthYear) {
  const exp = birthYear;
  switch (exp) {
    case (2020):
      return "Rat";
      break;
    case (2021):
      return "Ox";
      break;
    case (1938):
      return "Tiger";
      break;
    case (1951):
      return "Rabbit";
      break;
    case (1964):
      return "Dragon";
      break;
    case (1977):
      return "Snake";
      break;
    case (1990):
      return "Horse";
      break;
    case (2003):
      return "Sheep";
      break;
    case (2016):
      return "Monkey";
      break;
    case (1969):
      return "Rooster";
      break;
    case (1982):
      return "Dog";
      break;
    case (1995):
      return "Pig";
      break;
    default:
      return `Sorry, birthYear is invalid ${exp}.`;
  }
}

console.log(chineseZodiac(2021), "Ox");
console.log(chineseZodiac(2020), "Rat");
console.log(chineseZodiac(1938), "Tiger");
console.log(chineseZodiac(1951), "Rabbit");
console.log(chineseZodiac(1964), "Dragon");
console.log(chineseZodiac(1977), "Snake");
console.log(chineseZodiac(1990), "Horse");
console.log(chineseZodiac(2003), "Sheep");
console.log(chineseZodiac(2016), "Monkey");
console.log(chineseZodiac(1969), "Rooster");
console.log(chineseZodiac(1982), "Dog");
console.log(chineseZodiac(1995), "Pig");
