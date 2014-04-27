// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var result = '';

  //if obj is a number
  if (typeof obj === "number") {
  	result = obj.toString();
  }

  //if obj is undefined
  if (!obj) {
  	result = 'null';
  }

  //if obj is boolean
  if (typeof obj === "boolean") {
  	result = (obj) ? 'true' : 'false';
  }

  //if obj is a string
  if (typeof obj === "string") {
  	result += '"' + obj + '"';
  }

  //if obj is array
  if (Array.isArray(obj)) {
  	result = (obj.length === 0) ? '[]': '';
  }
  
  console.log(result);
  return result;
};
