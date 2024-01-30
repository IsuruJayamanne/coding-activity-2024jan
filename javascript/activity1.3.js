// code
// method to merge object with a prototype taking intersection
function objectProjection(source, prototype) {
  let projectedObject = {};

  // merge source object with prototype object
  for (let key in prototype) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] === "object") {
        // if it has sub objects
        // recursively call the method to merge sub objects
        projectedObject[key] = objectProjection(source[key], prototype[key]);
      } else {
        projectedObject[key] = source[key];
      }
    }
  }

  return projectedObject;
}

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
    prop11:{
        prop22: null
    }
};

let projectedObj = objectProjection(src, proto);
console.log(projectedObj);

