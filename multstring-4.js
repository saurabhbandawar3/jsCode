// Count Multiple Occurrences
/* Write a program to find the duplicate characters in a string and 
count the number of occurrences. Ignore case differences, white spaces 
and special characters.*/

var str = "aabbbccddddee f o";
// var s = str.replace(" ", '');
var s = str.split(' ').join('');
console.log(s);
var count = {};
for (var i in s ){
    var ch = s[i];
    if (!count[ch]){
        count[ch]=0;
    }
    count[ch]++;
}
console.log(count);

// var chars = str.replace(/(.)\1*/g, function (m, $1) {
//     return $1 + m.length;
// });

