function addTxt(){

    var userDetail = {
        userName : document.getElementById('name').value,
        email : document.getElementById('email').value,
        password : document.getElementById('password').value,
        confirmPassword : document.getElementById('confirmPassword').value,
        address : document.getElementById('address').value,
        dateOfBirth : document.getElementById('dateOfBirth').value,
        gender : document.getElementById('gender').value,
        number : document.getElementById('number').value,
    }
    var pass1 = userDetail.password.toUpperCase();
    var pass2 = userDetail.confirmPassword.toUpperCase();

    var userDetailString = JSON.stringify(userDetail);
    console.log(userDetailString);
   



    if(pass1 != pass2){
        alert("Your Password and Confirm Password is not same");
    }
   
    
    else{
        console.log(userDetail);
    }
    // else if(pass1 == pass2){
    // console.log(userDetail);
    // }
    
}





