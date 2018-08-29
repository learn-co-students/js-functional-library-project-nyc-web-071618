fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(coll, call) {
      const newColl = coll instanceof Array ? coll : Object.values(coll);
      for (i = 0; i < newColl.length; i++) {
        call(newColl[i], i, newColl);
      }
      return coll;
    },

    map: function(coll, call) {
      const newColl = coll instanceof Array ? coll : Object.values(coll);
      let calledArray = [];
      for (i = 0; i < newColl.length; i++) {
        calledArray.push(call(newColl[i], i, newColl));
      }
      return calledArray;
    },

    reduce: function(coll, call, acc = 0) {
      const newColl = coll instanceof Array ? coll : Object.values(coll);
      for (i = 0; i < newColl.length; i++) {
        acc = call(acc, newColl[i], newColl);
      };
      return acc;
    },

    find: function(coll, predicate) {
      const newColl = coll instanceof Array ? coll : Object.values(coll);
      for (i = 0; i < newColl.length; i++) {
        if (predicate(newColl[i])) {
          return newColl[i];
        }
      }
    },

    filter: function(coll, predicate) {
      const newColl = coll instanceof Array ? coll : Object.values(coll);
      let arr = []
      for (i = 0; i < newColl.length; i++) {
        if (predicate(newColl[i])) {
          arr.push(newColl[i]);
        }
      }
      return arr;
    },

    size: function(coll) {
      const newColl = coll instanceof Array ? coll : Object.values(coll);
      return newColl.length
    },

    first: function(coll, num = false) {
      const newColl = coll instanceof Array ? coll : Object.values(coll);
      return num ? newColl.slice(0, num) : newColl[0]
    },

    last: function(coll, num = false) {
      const newColl = coll instanceof Array ? coll : Object.values(coll);
      return num ? newColl.slice(newColl.length-num, newColl.length) : newColl[newColl.length-1]
    },

//refactor
    compact: function(coll) {
      const newColl = coll instanceof Array ? coll.slice() : Object.values(coll);
      for (i = 0; i < coll.length; i++) {
        if (!!newColl[i] === false) {
          newColl.splice(i, 1);
        };
      };
      for (i = 0; i < coll.length; i++) {
        if (!!newColl[i] === false) {
          newColl.splice(i, 1);
        };
      };
      return newColl;
    },

    sortBy: function(coll, call) {
      const arr = coll.slice();
      return arr.sort(function (num1, num2) {
        return call(num1) - call(num2)
      });
    },

    // flatten: function(arr, shallow = false) {
    //   while ()
    //
    // // for (var i = 0; i < arr.length; i++) {
    // //  if  (arr[i].length > 1)
    //      for (var j = 0; j < arr[i].length; j++) {
    // //     console.log(arr[i][j]);
    //       }
    // //   }
    // }

    //   // if (!shallow) {
    //   //   for (const value in coll) {
    //   //
    //   //   };
    //   // } else {
    //   //
    //   // };
    // },

    // uniq: function(arr, isSorted, call) {
    //   if (!isSorted) {
    //
    //   };
    //   return arr;
    // },

    keys: function(obj) {
      const values = [];
      for (let key in obj) {
        values.push(key);
      };
      return values;
    },

    values: function(obj) {
      const values = [];
      for (let key in obj) {
        values.push(obj[key]);
      };
      return values;
    },

    functions: function(obj) {
      const names = [];
      for (let key in obj) {
        if (typeof obj[key] === "function") {
          names.push(key);
        }
      };
      return names;
    },

    giveMeMore: function() {
      return true;
    },

  }
})()

fi.libraryMethod()
