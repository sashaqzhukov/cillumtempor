function* iterator(obj) {
  for (let key in obj) {
    yield key;
  }
}

let obj = { a: 1, b: 2, c: 3 };
for (let key of iterator(obj)) {
  console.log(key);
}
