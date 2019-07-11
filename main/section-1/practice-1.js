'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(
    (value)=>{
      return collectionB.includes(value);
    }
  );
}
