// write a program to find if the given string is palindrome.

var str = "aba"
var pstr = str.split('').reverse().join('');
if (str == pstr ){
    console.log("Sring is Palindrome");
}else{
    console.log("Sring is Not Palindrome");
}

// var revString = "";
// for (var i = str.length - 1; i >= 0; i--) {
//     revString += str[i];
// }
//console.log(revString);