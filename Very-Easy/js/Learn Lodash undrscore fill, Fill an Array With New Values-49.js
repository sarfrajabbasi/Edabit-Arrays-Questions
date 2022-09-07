function fill(arr, value, start = 0, end = arr.length) {
	for(let i = start; i < end;i++){
        arr[i] = value;
    }
    return arr;
}

console.log(fill([1, 2, 3], "a"), ["a", "a", "a"]);
console.log(fill(Array(3), 2), [2, 2, 2]);
console.log(fill([4, 6, 8, 10], "*", 1, 3), [4, "*", "*", 10]);
console.log(
  fill(
    [
      { make: "toyota", color: "red" },
      { make: "ford", color: "blue" },
      { make: "mazda", color: "grey" },
      { make: "ford", color: "green" },
    ],
    "TRUCKS!",
    1,
    2
  ),
  [
    {
      make: "toyota",
      color: "red",
    },
    "TRUCKS!",
    {
      make: "mazda",
      color: "grey",
    },
    {
      make: "ford",
      color: "green",
    },
  ]
);