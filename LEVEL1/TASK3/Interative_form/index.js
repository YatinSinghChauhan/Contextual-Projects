
function validateForm() {
    var  name = document.getElementById('name').value;
    var lname = document.getElementById('lname').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

     // Javascript reGex for Name validation
    var nameCheck = /^[a-zA-Z\\s]*$/;
    var lnameCheck = /^[a-zA-Z\\s]*$/;
     // Javascript reGex for Email validation
    var emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
     

    

    if(name.value === '' || !nameCheck.test(name)) {
        alert("*Valid Name is accepted!");
        return false;
    }
    else if (!lnameCheck.test(lname)) {
        alert("*Valid Last Name is accepted!");
        return false;
    }
    else if (phone.length != 10){
        alert("*Phone number should be of 10 digits!");
        return false;
      
    }
    else if ( email.value === '' || !emailCheck.test(email)){
        
        alert(" *Valid Email is required");
        return false;
          
    }
    else if (password.value === '' || password.value.length<8) {
        alert(" *Required password with min 8 character.");
        return false;

    }
    return true;
}
