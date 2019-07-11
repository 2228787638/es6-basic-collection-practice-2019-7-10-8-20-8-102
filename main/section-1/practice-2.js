'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(aindex => collectionB.flat().find((bindex) => aindex === bindex))
}
