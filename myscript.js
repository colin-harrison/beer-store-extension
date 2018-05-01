// Grab Table Header Elements and Get Their Children Into an Array
var parentNodes = [];
grandParentNodes = document.getElementsByTagName('thead')
for (let i = 0; i < grandParentNodes.length; i++) {
  parentNodes[i] = grandParentNodes[i].childNodes[0]
}

// Insert a new Price per drink header before the store availability header
var headers = document.getElementsByTagName('th');
for (let i = 0; i < parentNodes.length; i++) {
  let newNode = document.createElement('th')
  newNode.innerHTML = 'Price Per 1.5 oz Alcohol'
  let storeAvailabilityHeader = parentNodes[i].childNodes[2]
  parentNodes[i].insertBefore(newNode, storeAvailabilityHeader)
}

// Grab sizes and volumes using a regex
var sizes = []
var volumes = []
var regex = /\d+/g;
var sizeStrings = document.getElementsByClassName("size");
for (let i = 0; i < sizeStrings.length; i++) {
  do {
    var sizeMatch = regex.exec(sizeStrings[i].innerText)
    if (sizeMatch) {
      sizes.push(sizeMatch[0])
      let volMatch = regex.exec(sizeStrings[i].innerText)
      volumes.push(volMatch[0])
    }
  } while (sizeMatch)
}

//console.log(sizes)
//console.log(volumes)

// Insert cells in the Price per Drink Column
var oddRows = document.getElementsByClassName("odd");
var evenRows = document.getElementsByClassName("even");
for (let i = 0; i < oddRows.length; i++) {
  let oddCell = oddRows[i].insertCell(2);
  oddCell.innerHTML = "New cell"

  if (i < evenRows.length) {
    let evenCell = evenRows[i].insertCell(2)
    evenCell.innerHTML = "New cell"
  }
}

function grabABV() {
  let possibleABV = document.getElementsByTagName('dd');
  for (let i = 0; i < possibleABV.length; i++) {
    if (possibleABV[i].innerText.indexOf('%') != -1) {
        let ABVmatch = possibleABV[i].innerText.slice(0,-1)
        return ABVmatch
    }
  }
  return null
}

// Grab ABV from page
var ABV = grabABV()

/*
* Need to grab:
*   price
*/