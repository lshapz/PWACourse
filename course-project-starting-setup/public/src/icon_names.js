const folder = './images/icons';
const fs = require('fs');

var nameArray = fs.readdirSync(folder).map(item=>{
	var iconObj = {}
	var [size, type] = item.split('-icon-')[1].split('.')

	iconObj.src = "/src/images/icons/" + item
	iconObj.type = "image/" + type
	iconObj.sizes = size

	return iconObj

})

console.log(nameArray)