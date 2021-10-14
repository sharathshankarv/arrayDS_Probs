const fizzBuzz = () =>{
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuss")
        }else if(i % 3 === 0){
            console.log("Fizz")
        }else if(i % 5 === 0){
            console.log("Buss")
        }else{
            console.log(i)
        }
    }
}
fizzBuzz()