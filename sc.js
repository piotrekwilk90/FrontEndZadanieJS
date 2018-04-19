
document.getElementById("digit1").addEventListener("click", function() { myFunction("digit1"); } );
document.getElementById("digit2").addEventListener("click", function() { myFunction("digit2"); } );
document.getElementById("digit3").addEventListener("click", function() { myFunction("digit3"); } );
document.getElementById("digit4").addEventListener("click", function() { myFunction("digit4"); } );
document.getElementById("digit5").addEventListener("click", function() { myFunction("digit5"); } );
document.getElementById("digit6").addEventListener("click", function() { myFunction("digit6"); } );
document.getElementById("digit7").addEventListener("click", function() { myFunction("digit7"); } );
document.getElementById("digit8").addEventListener("click", function() { myFunction("digit8"); } );
document.getElementById("digit9").addEventListener("click", function() { myFunction("digit9"); } );
document.getElementById("digit0").addEventListener("click", function() { myFunction("digit0"); } );
document.getElementById("plus").addEventListener("click", function() { myFunction("plus"); } );
document.getElementById("minus").addEventListener("click", function() { myFunction("minus"); } );
document.getElementById("sub").addEventListener("click", function() { myFunction("sub"); } );
document.getElementById("multi").addEventListener("click", function() { myFunction("multi"); } );
document.getElementById("score").addEventListener("click", function() { myFunction("score"); } );
document.getElementById("clear").addEventListener("click", function() { myFunction("clear"); } );


var numerOne;
var digitValue;
var temp;
var markType=false;
function myFunction(butSign) {
    var screen =  document.getElementById("screen");
if (butSign !== "score" && butSign !=="clear"){
    markType = true;
     digitValue= document.getElementById(butSign).innerHTML;

     if (temp === undefined || temp === "0"){
         temp = digitValue;
     }else{
         temp += digitValue;
     }

     

         
    
    screen.innerHTML = temp;

    }else if (butSign === "score"){

        screen.innerHTML = eval(temp);
        temp = undefined;
        

    }else if (butSign === "clear"){
        screen.innerHTML="0";
        temp=undefined;
    }



}














 

