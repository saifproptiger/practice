function hello(){
	alert("Hello Saif")
}
function hyp(a,b){
	function sqr(a){
		return a*a;
	}
	return Math.sqrt(sqr(a)+sqr(b));
}
function hyp2(a,b){
	document.write(hyp(a,b));
}
