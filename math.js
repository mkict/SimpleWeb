
function gcd(a,b){
	if(a%b===0) return b;
	return gcd(b,a%b);
};

function sum(a,b){
	return a+b;
};

var math = {
	gcd:gcd,
	sum:sum	
};
module.exports = math;
