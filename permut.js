function permute(arr, result, n){
  n = n || arr.length;
  if(n === 1){
    return result(arr);
  }else{
    for(let i = 1; i <= n; i++){
      permute(arr, result, n-1);
      if(n%2){
        swap(arr, 0, n-1)
      }else{
        swap(arr, i-1, n-1)
      }
    }
  }
}

function swap(arr, i, n){
  let temp = arr[i];
  arr[i] = arr[n];
  arr[n] = temp;
  return arr
}

function output(input) {
  console.log(input);
};


let s = ['a', 'b', 'c'];
permute(s, output)