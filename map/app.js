var map = new Map();
function concat(a, b) {
  var mapKey = a + b;
  if (map.has(mapKey)) {
    return map.get(mapKey);
  }
  var res = a + b;
  map.set(mapKey, res);
  return res;
}
console.time("concat time");
concat(3, 9);

console.timeEnd("concat time");
console.time("concat time2");
concat(3, 9);
console.timeEnd("concat time2");
