'use strict';

module.exports = function countSameElements(collection) {
  const resultCollection = new Array();
  const resultMap = new Map();
  collection.forEach(item => {
    resultMap.set(item, resultMap.get(item) + 1||1);
  });
  resultMap.forEach((value, key, resultMap) => {
    if(key.indexOf('-')===-1){
      resultCollection.push( {key: key, count: value} );
    }else{
      resultCollection.push( { key: key.split('-')[0],count: parseInt(key.split('-')[1])} )
    }
  });
  return resultCollection;
}
