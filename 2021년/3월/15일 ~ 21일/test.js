const a = {
  b: 42,
  c: "42",
  d: [1, 2, 3],
  f: {
    e: "",
    g: "",
  },
};

console.log(
  JSON.stringify(
    a,
    function (k, v) {
      return v;
    },
    "----"
  )
);
