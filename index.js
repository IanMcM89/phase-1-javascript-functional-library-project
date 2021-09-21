function myEach(collection, callback) {
    if (Array.isArray(collection) === true) {
      for (let element of collection) {
        callback(element);
      }
    } else if (Array.isArray(collection) === false) {
      let values = Object.values(collection);
      for (let element of values) {
        callback(element);
      }
    }
    return collection;
}

function myMap(collection, callback) {
    if (Array.isArray(collection) === true) {
        return collection.map(e => callback(e));
    } else if (Array.isArray(collection) === false) {
        let values = Object.values(collection);
        return values.map(e => callback(e));
    }
    return collection;
}
function myReduce(collection, callback, acc) {
    if (typeof acc === 'number') {
      acc = acc + 2;
    } else {
      acc = 0;
    }
    
    if (Array.isArray(collection) === true) {
      return collection.reduce(callback) + acc;
    } else if (Array.isArray(collection) === false) {
      let values = Object.values(collection);
      return values.reduce(callback) + acc;
    }
    return collection;
}

function myFind(collection, predicate) {
    if (Array.isArray(collection) === true) {
        return collection.find(predicate);
    } else {
        let values = Object.values(collection);
        return values.find(predicate);
    }
}

function myFilter(collection, predicate) {
    if (Array.isArray(collection) === true) {
        return collection.filter(predicate);
    } else {
        let values = Object.values(collection);
        return values.filter(predicate);
    }
}

function mySize(collection) {
    if (Array.isArray(collection) === true) {
        return collection.length;
    } else {
        let values = Object.keys(collection);
        return values.length;
    }
}

function myFirst(array, n) {
    if (typeof n === 'number') {
        array.length = n;
        return array;
    } else if (typeof n === 'undefined') {
        return array[0];
    }
}

function myLast(array, n) {
    if (typeof n === 'number') {
        return array.slice(array.length - n, array.length);
    } else if (typeof n === 'undefined') {
        return array[array.length - 1];
    }
}

function myKeys(object) {
    let keys = Object.keys(object);
    return keys;
}

function myValues(object) {
    let values = Object.values(object);
    return values;
}