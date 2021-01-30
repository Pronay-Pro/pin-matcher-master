const generate = document.getElementById("generate-btn");
generate.addEventListener('click',function(){
    let number = getPin();
    document.getElementById("generateForm").value = number
})


function getPin(){
    let generatePin = Math.random()*10000;
    let generatePinNumber = (generatePin + '').split('.')[0];
    if(generatePinNumber.length === 4){
        return generatePinNumber;
    }
    else{
        return getPin();
    }
}

const digitContainer = document.getElementById("digitContainer");
digitContainer.addEventListener('click',function(event){
   const digit = event.target.innerText;
   if(isNaN(digit)){
     if(digit==='C'){
        const typed = document.getElementById("numberInput");
        typed.value =' ';
     }
     else if(digit ==='<'){
        const typed = document.getElementById("numberInput");
        typed.value = typed.value - digit;
     }
   }
   else{
       const typed = document.getElementById("numberInput");
        typed.value = typed.value +digit;
   }
})
 const submit = document.getElementById("submit");
 submit.addEventListener('click',function(){
     const generatePin = document.getElementById("generateForm").value;
     const typedPin = document.getElementById("numberInput").value;
     if(generatePin === typedPin){
        document.getElementById("right").style.display = "block"
        document.getElementById("wrong").style.display = "none"
     }
     else{
        document.getElementById("wrong").style.display = "block"
        document.getElementById("right").style.display = "none"
     }
 })