'use strict';
module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter((value)=>{
    return [].concat.apply([], collectionB).includes(value);
  });
}
