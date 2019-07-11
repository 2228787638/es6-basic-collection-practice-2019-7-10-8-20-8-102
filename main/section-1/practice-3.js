'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.filter(
    (value)=>{
      return objectB.value.includes(value);
    }
  );
}
