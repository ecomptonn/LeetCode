var rotate = function(nums, k) {
    k = k % nums.length;
    if (k === 0) return;
    
    // create the rotated array
    let rotatedPart = nums.slice(nums.length - k);
    let remainingPart = nums.slice(0, nums.length - k);
    
    // combine the two parts
    let result = rotatedPart.concat(remainingPart);
    
    // copy the result back to nums;
    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }
};