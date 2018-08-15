// Find the maximum longest common characters between two given string

var str1 ="aabbbccddddee";
var str2 = "abbbcddcee";

var l1 = str1.length;
var l2 = str2.length;
var answer="";

for (var  i = 0; i < l1; i++) {
    var match = ""
    for (var j = 0; j < l2; j++) {
        if (str1[i] == str2[j]){
             match += str2[j]
        } else if (match.length > answer.length){
            answer = match
            match = ""
        }
    }
}
console.log(answer);
