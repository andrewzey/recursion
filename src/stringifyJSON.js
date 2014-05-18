// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

  //if obj is a number
  if (typeof obj === "number") {
  	return obj.toString();
  }

  //if obj is null
  if (obj === null) {
  	return 'null';
  }

  //if obj is boolean
  if (typeof obj === "boolean") {
  	return (obj) ? 'true' : 'false';
  }

  //if obj is a string
  if (typeof obj === "string") {
  	return '"' + obj + '"';
  }

  var result = '';
  
  //if obj is array
  if (Array.isArray(obj)) {
		result += '[';

		for (var i = 0; i < obj.length; i++) {
			result += stringifyJSON(obj[i]) + ',';
		}

		//remove trailing comma
  	if (result[result.length-1] === ",") {
  		result = result.slice(0,-1); 
  	}

		result += ']';
  }

  //if obj is obj
  if (typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
  	result += '{';

  	for (var key in obj) {
  		//ignore functions and undefined values
  		if (typeof obj[key] !== "function" && typeof obj[key] !== "undefined") {
  			result += '"' + key + '":' + stringifyJSON(obj[key]) + ","; 
  		}
  	}

  	//remove trailing comma
    if (result[result.length-1] === ",") {
      result = result.slice(0,-1); 
    }

  	result += '}';
  }

  return result;
};

// var stringifiableValues = [
//   9,
//   null,
//   true,
//   false,
//   "Hello world",
//   [],
//   [8],
//   ["hi"],
//   [8, "hi"],
//   [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
//   [8, [[],3,4]],
//   [[[["foo"]]]],
//   {},
//   {"a": "apple"},
//   {"foo": true, "bar": false, "baz": null},
//   {"boolean, true": true, "boolean, false": false, "null": null },
//   // basic nesting
//   {"a":{"b":"c"}},
//   {"a":["b", "c"]},
//   [{"a":"b"}, {"c":"d"}],
//   {"a":[],"c": {}, "b": true}
// ];

// for (var z = 0; z < stringifiableValues.length; z++) {
// 	console.log(stringifyJSON(stringifiableValues[z]));
// }







