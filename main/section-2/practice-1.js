'use strict';

module.exports = function countSameElements(collection) {
  return Array.from(new Set(collection)).map(value => {
    return {key: value, count: collection.filter(x => x === value).length}
  })
}
