// you have to copy and paste the code to the dev tools on the course home page
// https://www.udemy.com/progressive-web-app-pwa-the-complete-guide/learn/v4/content

function toSeconds(str) {
    var pieces = str.split(":");
    var result = Number(pieces[0]) * 60 + Number(pieces[1]);
    return(result.toFixed(3));
}

var resultInSeconds = Array.from(
// change #collapsible-content-4 to be whichever section of the Udemy course you're working on 
		document.querySelectorAll('#collapsible-content-4 .lecture__item__link__time')
	) 
	.map(item=>item.innerText)
	.map(toSeconds)
	.reduce((a,b)=>{return parseInt(a)+parseInt(b)}, 0)

var resultInMinutes = resultInSeconds / 60

console.log(resultInMinutes)

// divide by 60 to get a sense in terms of minutes  