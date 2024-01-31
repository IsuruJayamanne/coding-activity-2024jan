// code
/**
 * method to merge object with a prototype taking intersection
 * @param {object} source 
 * @param {object} prototype 
 * @returns {object} - A new object with properties from source object which is also present in prototype object
 */
function objectProjection(source, prototype) {
  let projectedObject = {};

  // merge source object with prototype object
  for (let key in prototype) {
    if (source.hasOwnProperty(key)) {
      // add the value from source object
      projectedObject[key] = source[key];
    }
  }

  return projectedObject;
}
// ----------------------------

// demo

let src = {
  prop11: {
    prop21: 21,
    prop22: {
      prop31: 31,
      prop32: 32,
    },
  },
  prop12: 12,
};
let proto = {
  prop11: {
    prop22: null,
  },
};

let projectedObj = objectProjection(src, proto);
console.log(projectedObj);
