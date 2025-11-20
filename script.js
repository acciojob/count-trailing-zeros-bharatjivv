function trailingZeros(n) {
  //your JS code here. If required.
	let counter = 0;

while(n%10 === 0 ) {
    counter++;
    n = n/10;
}
return counter;
}

const input = Number(prompt("Enter a number"));
alert(trailingZeros(input));
