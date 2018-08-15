// Pairing Integers
var nums = [1, 4, 45, 10, 6, -8];
var target = 16;
for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) {
            console.log(nums[i] + ' ' + nums[j]);
        }
    }
}   