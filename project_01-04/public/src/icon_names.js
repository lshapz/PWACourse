const folder = './images/icons';
const fs = require('fs');

var appleArray = []

var nameArray = fs.readdirSync(folder).map(item=>{
	var iconObj = {}
	var apple = item.split('-')[0] === 'apple'
	var [size, type] = item.split('-icon-')[1].split('.')
	var path = "/src/images/icons/" + item
	if (!apple) {	

		iconObj["src"] = path
		iconObj["type"] = "image/" + type
		iconObj["sizes"] = size
		return iconObj

	} else {
		appleArray.push(`<link rel="apple-touch-icon" href="/src/images/icons/${item}" sizes="${size}">`)
	}
	
}).filter(item=>item)

fs.writeFile("./object.json", JSON.stringify(nameArray, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File 1 has been created");
});


var appleString = appleArray.map(item=>{return item + "\n"}).join('')
var appleLinks = fs.createWriteStream('appleLinks.txt');
appleLinks.on('error', function(err) { console.error(err); });

appleLinks.write(appleString)
console.log("File 2 has been created");
appleLinks.end();

