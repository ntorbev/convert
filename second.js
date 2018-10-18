const flatten = (objectOrArray, prefix = '') => {
  const nestElement = (prev, value, key) => (value
  && typeof value === 'object'
    ? { ...prev, ...flatten(value, `${prefix}${key}.`) }
    : { ...prev, ...{ [`${prefix}${key}`]: value } });

  return Array.isArray(objectOrArray)
    ? objectOrArray.reduce(nestElement, {})
    : Object.keys(objectOrArray).reduce(
      (prev, element) => nestElement(prev, objectOrArray[element], element),
      {},
    );
};
console.log(Object["values"](flatten([111, 222, [333, [[4], 5]], 6])));
console.log(Object["values"](flatten({ hello: 1, world: [2, 3, { foo: [[4]]}] })));
