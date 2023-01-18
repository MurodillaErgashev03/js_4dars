const elResult = document.querySelector("#result");
const elInput = document.querySelector("#age"); 
const elBtn = document.querySelector("#btn");

elBtn.addEventListener("click", function (){
   if(elInput.value%5==0 && elInput.value%3==0){
    console.log(elInput.value);


    elResult.textContent = "FizzBuzz"
   }
   else if(elInput.value%5==0 ) {
    
    elResult.textContent = "Buzz"
   }

   else if(elInput.value%3==0 ) {
    
    elResult.textContent = "Fizz"
   }
 else{
    elResult.textContent = elInput.value
 }


})


console.log(elInput)