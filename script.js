//const form =document.getElementById("form");




// function validateform(event){
//   const fName = document.form.fName.value;
//   const mName = document.form.mName.value;
//   const lName = document.form.lName.value;
//   const mobile = document.form.mobile.value;
//   const email = document.form.email.value;
//   const address = document.form.address.value;
//   if (fName == "" || lName == "" || mName == "" || mobile == "" || email == "" || address == "" || isNaN(mobile)){
//     alert("Please provide valid info!")
//     event.preventDefault();
//   }else{
//     window.alert(`Hello ${fName}, please hold on while we generate your cv...`);
    
//     sessionStorage.setItem("fName", fName);
//     sessionStorage.setItem("lName", lName);
//     sessionStorage.setItem("mName", mName);
//     sessionStorage.setItem("mobile",  mobile);
//     sessionStorage.setItem("email", email);
//     sessionStorage.setItem("address", address);
//   }

//   return true;
// }
function validateemail(){
const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return emailregex.test(String(email).toLowerCase());
}

function validatename(value) {
  return (value.match(/^[A-Za-z]+$/))
}

function validatemobile(value){
  return value.match(/\d/g).length===10;
}

function validateform(){
  var fName = document.getElementById("fisrtname").value
  var mName = document.getElementById("midname").value
  var lName = document.getElementById("lastname").value
  var gender = document.getElementById("gender").value
  var mobile = document.getElementById("mobile").value
  var email = document.getElementById("email").value
  var address = document.getElementById("address").value
  var fullName = fName + " " + mName + " " + lName
  if(validatemail(email) && validatemobile(mobile) && validatename(fName) && validatename(mName)
      && validatename(lname)){
        localStorage.setItem("fullname", fullName)
        localStorage.setItem("gender", gender)
        localStorage.setItem("mobile", mobile)
        localStorage.setItem("email" , email)
        localStorage.setItem("address" , address)

        location.href = "cv.html";
        
    }else{
      alert("Please provide a valid info to proceed!")
    }
}