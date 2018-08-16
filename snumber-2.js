var num = 2180;
// 812
var flag =0;

while(flag == 0){
    rNum = reverse(num);
    if(rNum == num){
       flag == 1; 
       break;
    }else{
        num++
    }
}
console.log(num);
function reverse (num) {
    var rev = 0;
    while (num > 0) {
        rev = rev * 10;
        rev = rev + parseInt(num % 10);
        num = parseInt(num / 10);
    }
    return rev;
}
