// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

  //if obj is a number
  if (typeof obj === "number") {
  	return obj.toString();
  }

  //if obj is undefined
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

  //if obj is array
  if (Array.isArray(obj)) {
  	if (obj.length === 0) {
  		return '[]';
  	} else {
  		// var result = '[';
  		// for (var i = 0; i < obj.length; i++) {
  		// 	stringifyJSON(i);
  		// }
  		// result += ']';
  		// return result;
  	}
  }
  
};

console.log(stringifyJSON(9));
console.log(stringifyJSON(null));
console.log(stringifyJSON(true));
console.log(stringifyJSON(false));
console.log(stringifyJSON("Hello World"));
console.log(stringifyJSON([]));







