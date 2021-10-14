function ValidParanthesis(str){
  let obj = {
    "(":")",
    "{":"}",
    "[":"]"
  }

  let Stack = [];

  for(let p of str){
    if(obj.hasOwnProperty(p)){
      Stack.push(p)
    }else{
      let poped = Stack.pop();
      debugger
      if(obj[p] !== poped) {return "Invalid";}
    }
  }

  return Stack.length === 0 ? "Valid" : "Invalid";

}
let str = "[({)]" 
console.log(ValidParanthesis(str));
