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

  //if obj is array
  if (Array.isArray(obj)) {
		var arrResult = '[';

		for (var i = 0; i < obj.length; i++) {
			//if last element, don't add comma
			if (i === (obj.length - 1)) {
				arrResult += stringifyJSON(obj[i]);
			} else {
				arrResult += stringifyJSON(obj[i]) + ',';
			}	
		}

		arrResult += ']';
		return arrResult;
  }

  //if obj is obj
  if (typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
  	var objResult = '{';

  	for (var key in obj) {
  		objResult += '"' + key + '":' + stringifyJSON(obj[key]) + ","; 
  	}

  	//remove trailing comma
  	if (objResult[objResult.length-1] === ",") {
  		objResult = objResult.slice(0,-1); 
  	}

  	objResult += '}';
  	return objResult;
  }
  
};

var stringifiableValues = [
  9,
  null,
  true,
  false,
  "Hello world",
  [],
  [8],
  ["hi"],
  [8, "hi"],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[],3,4]],
  [[[["foo"]]]],
  {},
  {"a": "apple"},
  {"foo": true, "bar": false, "baz": null},
  {"boolean, true": true, "boolean, false": false, "null": null },
  // basic nesting
  {"a":{"b":"c"}},
  {"a":["b", "c"]},
  [{"a":"b"}, {"c":"d"}],
  {"a":[],"c": {}, "b": true}
];

for (var z = 0; z < stringifiableValues.length; z++) {
	console.log(stringifyJSON(stringifiableValues[z]));
}







