fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i=0; i < newCollection.length; i++){
        callback(newCollection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i=0; i < newCollection.length; i++){
        newCollection[i] = callback(newCollection[i]);
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      let newAcc = (acc !== undefined) ? acc : 0;
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);

      for (let i=0; i < newCollection.length; i++){
        newAcc = callback(newAcc, newCollection[i], newCollection);
      }
      return newAcc;
    },

    find: function(collection, predicate) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);

      for (let i=0; i < newCollection.length; i++){
        if(predicate(newCollection[i])){
          return newCollection[i]
        };
      }
      return undefined
    },

    filter: function(collection, predicate) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      let newArr = []


      for (let i=0; i < newCollection.length; i++){
        if(predicate(newCollection[i])){
          newArr.push(newCollection[i])
        };
      }
      return newArr
    },

    size: function(collection, predicate) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);

      return newCollection.length
    },

    first: function(collection, n=1) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      let newArr = []

      for (let i=0; i < n; i++){
          if(n === 1){
            return newCollection[i];
          }
          newArr.push(newCollection[i]);
      }
      return newArr
    },

    last: function(collection, n=1) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      let newArr = [];
      for (let i=newCollection.length - 1; i >= newCollection.length - n; i--){
          if(n === 1){
            return newCollection[i];
          }
          newArr.push(newCollection[i]);
      }
      return newArr.reverse()
    },


  }
})()

fi.libraryMethod()
