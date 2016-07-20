function addNum(a,b){

	document.write(a+b);
}
function checkUp(a){
	document.write(typeof(a));
	document.write(typeof(parseInt(a)));
	document.write(typeof(a));
	document.write(a);
}
function MultiPly(t,b,c,callback){
	var i;
	var a = [];
	for(i=0;i<3;i++){
		a[i] = callback(arguments[i]*2);
	}
	document.write(a);
	return a;
}
function a(){
	alert('A');
	alert('B');
	return function b(){
		alert('B');
	};
}
function getRGB(a){
	var p = [];
	p[0] = parseInt(a.substr(1,2),16);
	p[1] = parseInt(a.substr(3,2),16);
	p[2] = parseInt(a.substr(5,2),16);
	document.write(p);
}