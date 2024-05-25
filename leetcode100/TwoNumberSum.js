function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [i, map.get(complement)];
        }
        map.set(nums[i], i);
    }
    return [];
}

const arr = [2, 4, 5, 3];
const result = twoSum(arr, 7);
console.log(result);  // Output: [2, 0] or [3, 1] depending on the first found complement
