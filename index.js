const alphabets = {
  d: {
    name: "d",
    series: 4,
  },
  k: {
    name: "k",
    series: 3,
  },
  p: {
    name: "p",
    series: 2,
  },
  n: {
    name: "n",
    series: 7,
  },
  l: {
    name: "l",
    series: 1,
  },
  a: {
    name: "a",
    series: 12,
  },
  o: {
    name: "o",
    series: 5,
  },
  m: {
    name: "m",
    series: 8,
  },
  b: {
    name: "b",
    series: 8,
  },
};

console.log(
  Object.values(alphabets)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((item) => item.name)
);
