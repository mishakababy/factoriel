var n = Math.round (Math.random() * 15);
var product = 1;
for (var i = n; i > 0 ; i--) {
	product = product * i;
}

console.log(n+"! "+product);