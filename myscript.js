// Grab Table Header Elements and Get Their Children Into an Array
var parentNodes = [];
grandParentNodes = document.getElementsByTagName('thead')
for (var i = 0; i < grandParentNodes.length; i++) {
  parentNodes[i] = grandParentNodes[i].childNodes[0]
}

// Insert a new Price per drink header before the store availability header
var headers = document.getElementsByTagName('th');
for (var i = 0; i < parentNodes.length; i++) {
  var newNode = document.createElement('th')
  newNode.innerHTML = 'Price Per 1.5 oz Alcohol'
  var storeAvailabilityHeader = parentNodes[i].childNodes[2]
  parentNodes[i].insertBefore(newNode, storeAvailabilityHeader)
}

// Grab sizes and volumes using a regex
var sizes = []
var volumes = []
var regex = /\d+/g;
var sizeStrings = document.getElementsByClassName("size");
for (var i = 0; i < sizeStrings.length; i++) {
  do {
    var sizeMatch = regex.exec(sizeStrings[i].innerText)
    if (sizeMatch) {
      sizes.push(sizeMatch[0])
      var volMatch = regex.exec(sizeStrings[i].innerText)
      volumes.push(volMatch[0])
    }
  } while (sizeMatch)
}

console.log(sizes)
console.log(volumes)

// Insert cells in the Price per Drink Column
var oddRows = document.getElementsByClassName("odd");
var evenRows = document.getElementsByClassName("even");
for (var i = 0; i < oddRows.length; i++) {
  var oddCell = oddRows[i].insertCell(2);
  oddCell.innerHTML = "New cell"

  if (i < evenRows.length) {
    var evenCell = evenRows[i].insertCell(2)
    evenCell.innerHTML = "New cell"
  }
}

/*
* Need to grab:
*   price
*   ABV
*/