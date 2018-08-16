var str = 'The quick brown fox jumps over the lazy';
var start = 'lazy';
var end = 'brown'
var count;
var schar = str.split(" ");
console.log(schar);

var sindex = schar.indexOf(start);
var eindex = schar.indexOf(end);
console.log(sindex,eindex);

if(sindex<eindex){
    count = eindex-sindex;
    console.log(count)
}else{
    count = sindex-eindex;
    console.log(count);
}