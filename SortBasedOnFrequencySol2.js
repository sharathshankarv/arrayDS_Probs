const frequencySort = (input = []) => {
    let arr = input.sort((a,b) => a-b);
    let map = {};
    for (let i = 0; i < arr.length; i++) {
       map[arr[i]] = (map[arr[i]] || 0) + 1;
    };
    return arr.sort((a,b) => map[b] - map[a] || a - b);
 };

let arr = [8,2,4,8,4,2,5,9,8,1]
// SortBasedOnFrequency(arr);
let sorted = frequencySort(arr);
console.log(sorted);