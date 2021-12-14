function SortBasedOnFrequency(arr){
let eleNFrequency = {}; 
let sortable  = [];
let result = []; 
for(let i = 0; i < arr.length; i++){
    eleNFrequency[arr[i]] = (eleNFrequency[arr[i]] || 0) + 1 
}
for (var a in eleNFrequency) {
    sortable.push([a, eleNFrequency[a]]);
}
sortable.sort(function(a, b) {
    return b[1] - a[1] ;
});

for(let i = 0; i < sortable.length;i++){
    let k = sortable[i][1];
    while(k !== 0){
        result.push(sortable[i][0])
        k--;
    }
}

return result

}

let arr = [8,2,4,8,4,2,5,9,8,1]
// SortBasedOnFrequency(arr);
let sorted = SortBasedOnFrequency(arr);
console.log(sorted);