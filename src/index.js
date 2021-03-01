
exports.min = function min (array) {
  if(array && Array.isArray(array) && array.length !== 0) {
    return Math.min(...array.map(item => item))
  }
  return 0;
}

exports.max = function max (array) {
  if(array && Array.isArray(array) && array.length !== 0) {
    return Math.max(...array.map(item => item))
  }
  return 0;
}

exports.avg = function avg (array) {
  if(array && Array.isArray(array) && array.length !== 0) {
    return array.reduce((sum, cur) => sum + cur) / array.length;
  }
  return 0;
}
