function secLarge(len, a){
  let max = -Infinity, res = -Infinity;
  // let s = a.sort((a,b)=>a-b);
  // let l = s.length;
  if(len < 2){
    return -1
  }
  for(let b of a){
    if(b>=max){
      [res, max] = [max, b];
    }else if(b < max && b > res){
      res = b;
    }
  }
  return res;
}
let arr = [2,2,2,4,7,1,3,6,8,9];
console.log(secLarge(2,arr))
