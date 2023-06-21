
const fizzBuzz=(num)=>{
    let fizz="";
    let buzz="";
    //if number is divisible by 3 equals to string "Fizz" , if it's not returns an empty string.
    if(num%3===0)  {fizz="Fizz";}
    //if number is divisible by 5creturns string "Buzz"if it's not returns an empty string.
    if(num%5===0){buzz="Buzz";}
    //Declaring message to save returned strings 
    let message=fizz+buzz;
    //If message is an empty string console will show number, if its not console will show message.
    if(message===""){return num;} 
        else{return message;}
}

module.exports=fizzBuzz;

let result=fizzBuzz(5);
console.log(result);





