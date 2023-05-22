export const getValueFromObject = (o, s) => {
  s = s.replace(/\[(\w+)\]/g, ".$1"); // convert indexes to properties
  s = s.replace(/^\./, ""); // strip a leading dot
  var a = s.split(".");
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
};

const rotateIndex = (index) => {
  if (index > 9) {
    return index - 9;
  }
  return index;
};

export const getNextTwoIndices = (currentIndex) => {
  const index1 = rotateIndex(currentIndex);
  const index2 = rotateIndex(currentIndex + 1);

  return [index1, index2];
};
