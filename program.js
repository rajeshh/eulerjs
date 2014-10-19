
console.log(process.argv);

var sum=0;

console.log('Number of args is ' + process.argv.length);
for (i = 2 ; i < process.argv.length; ++i) {
	sum = sum + Number(process.argv[i]);
}

console.log('sum of args is ' + sum);
