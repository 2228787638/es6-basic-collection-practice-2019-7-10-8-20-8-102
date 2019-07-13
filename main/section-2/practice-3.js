'use strict';

module.exports = function countSameElements(collection) {
  const collectionSet = new Set();
  //过滤拆分字符串
  collection.forEach(item => {
    if(item.indexOf('-')||item.indexOf(':')||item.indexOf('[')){
      collectionSet.add(item.split(/-|:|\[/)[0]);
    }else{
      collectionSet.add(item);
    }
  });
  collection.forEach((value,key,arr) => {
    if(value.indexOf('-')!=-1||value.indexOf(':')!=-1||value.indexOf('[')!=-1){
      for(let i = 0; i < parseInt(value.split(/-|:|\[/)[1]); i++){
        collection.push(value.split(/-|:|\[/)[0]);
      }
      collection.splice(key, 1);
    }
  });
  const object = {};
  collection.forEach(element => {
    if(object[element]) object[element]++;
    else object[element] = 1;
  })
  const collectionResult = new Array();
  collectionSet.forEach(element => {
    for(let item in object){
      if(element === item){
        collectionResult.push({name: item, summary: object[item]})
      }
    }
  })
  return collectionResult;
}
