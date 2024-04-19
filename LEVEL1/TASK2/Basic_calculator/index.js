function myFunction(){
    let result;

    // parseFloat is used because prompt returns string as an output so to take and restuen as aninteger parseInt() or parseFloat() is used to take integer and float values respectively.
    let num1 = parseFloat(prompt("Please enter first number :", ""));
    let operator = prompt("Please enter the operator :", "+");
    let num2 = parseFloat(prompt("Please enter second number :", ""));

    if (num1 == null || operator=="" || num2== null){
        result= "User don't need any calculations!";
    }

    else if (operator == "+" ) {
        result =num1 + num2;
    }
    // Displays the result in the innerHTMl of the container
    result = "Your Result: " + `<b>${num1} ${operator} ${num2}</b>`+ " : "+ result;
    document.getElementById("outcome").innerHTML = result;
  
}


// refresh Button 
function refresh() {
    
    document.getElementById("outcome").innerHTML = "";
}
    
