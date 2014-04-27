// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var result = [];
  var currentNode = document.body;

  var checkNode = function(node) {
  	if(node.classList){ //if the node has a class, push it to the result array
  		if (node.classList.contains(className)) {
  			result.push(node);
  		}
  		if (node.hasChildNodes) { //if the node has children, look inside the children
  			for (var i = 0; i < node.childNodes.length; i++) {
  				checkNode(node.childNodes[i]);
  			}
  		}
  	}
  };

  checkNode(currentNode);
  return result;
};


