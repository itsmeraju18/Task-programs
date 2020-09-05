function ValidationForm() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var mob = /^[6-9]\d{9}$/;
    var regmob = new RegExp(mob);
    var txtMobile = document.getElementById("mobilenum");
    var password = document.getElementById("password").value;
    var rpassword = document.getElementById("rpassword").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mail = document.getElementById("email").value;
    //var mobilenum=document.getElementById("mobilenum").value;  
    var regex = /^[7-9]\d{9}$/;
    if (!regmob.test(txtMobile.value)) {
      document.getElementById("m2").innerHTML = "enter valid mobile number";
      document.getElementById("mobilenum").focus();
      return false;
    }
    document.getElementById("m2").innerHTML = "you enter valid mobile number";
    if (password !== rpassword) {
      alert("please enter correct password");
      document.getElementById("p1").innerHTML = "you enter " + password;
      document.getElementById("p2").innerHTML = "you enter " + rpassword;
      document.getElementById("p2").focus();
  
      return false;
    }
  
    if (fname == null || fname == '') {
      alert("first name can't be blank");
      return false;
    }
  
    else if (lname == null || lname == '') {
      alert("last name can't be blank");
  
      return false;
    }
  
  
    const person = {
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
      mobilenum: document.getElementById("mobilenum").value,
      mail: document.getElementById("email").value,
      username: mobilenum,
      password: document.getElementById("password").value
    }
    localStorage.setItem('username', JSON.stringify(person));
  }
  
  
  
  function onlyAlphabetsFirst(e, t) {
    try {
      if (window.event) {
        var charCode = window.event.keyCode;
      }
      else if (e) {
        var charCode = e.which;
      }
      else { return true; }
      if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
        return true;
      else
        return false;
    }
    catch (err) {
      alert(err.Description);
    }
  }
  
  
  
  function onlyAlphabetsLast(e, t) {
    try {
      if (window.event) {
        var charCode = window.event.keyCode;
      }
      else if (e) {
        var charCode = e.which;
      }
      else { return true; }
      if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
        return true;
      else
        return false;
    }
    catch (err) {
      alert(err.Description);
    }
  }
  
  
  
  function ValidateEmails() {
    debugger;
    var mailformat = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    var reg = new RegExp(mailformat);
    var email = document.getElementById("email");
    if (!reg.test(email.value)) {
      document.getElementById("email").focus();
      document.getElementById("m3").innerHTML = "please enter valid email id";
      return false;
    }
    else {
      document.getElementById("m3").innerHTML = "You enter valid email id";
      return true;
    }
  }
  
  
  
  function onlyNumbersandPlus(e) {
    var keynum;
    if (window.event) {
      keynum = e.keyCode
    }
    else if (e.which) {
      keynum = e.which
    }
    if (keynum > 31 && keynum < 43 || keynum > 57)
      return false;
    return true;
  }
  
  
  
  function nameFunction() {
    debugger;
    var FirstName = document.getElementById("fname").value;
    var letters = /^[A-Za-z]{1,2}$/;
    var reg = new RegExp(letters);
    if (FirstName == null || FirstName == '') {
      document.getElementById("fname").focus();
      document.getElementById("name1").innerHTML = "not blank the first name";
      return false;
    }
    else if (reg.test(FirstName)) {
      document.getElementById("fname").focus();
      //document.getElementById("name1").innerHTML = "Name Atleast 3 char";
      return false;
    }
    else {
      document.getElementById("name1").innerHTML = "you enter correct name"
      return true;
    }
  }
  
  
  
  function lnameFunction() {
    //debugger;
    var LastName = document.getElementById("lname").value;
    var letters = /^[A-Za-z]{1,2}$/;
    var reg = new RegExp(letters);
    if (LastName == null || LastName == '') {
      document.getElementById("lname").focus();
      document.getElementById("name2").innerHTML = "not blank the Last name";
      return false;
    }
    else if (reg.test(LastName)) {
      document.getElementById("lname").focus();
     // document.getElementById("name2").innerHTML = "Name Atleast 3 char";
      return false;
    }
    else {
      document.getElementById("name2").innerHTML = "you enter correct name"
      return true;
    }
  }
  
  
  
  function Toggle() {
    var temp = document.getElementById("password");
    var temp2 = document.getElementById("rpassword");
    if (temp.type === "password") {
      temp.type = "text";
      temp2.type = "text";
    }
    else {
      temp.type = "password";
      temp2.type = "password";
    }
  }
  
  
  function mobieNumber() {
    var mob = /^[6-9]\d{9}$/;
    var regmob = new RegExp(mob);
  
    var txtMobile = document.getElementById("mobilenum");
  
  
    if (!regmob.test(txtMobile.value)) {
      document.getElementById("m2").innerHTML = "Please Enter valid mobile number";
      document.getElementById("mobilenum").focus();
      return false;
    }
    else {
      document.getElementById("m2").innerHTML = "you Enter valid mobile number";
    }
  }
  
  // function mobileNumber() {
  
  //   var Number = document.getElementById('YOUR ELEMENT ID').value;
  //   var IndNum = /^[0]?[789]\d{9}$/;
  
  //   if (IndNum.test(Number)) {
  //     return;
  //   }
  
  //   else {
  //     $('#errMessage').text('please enter valid mobile number');
  //     document.getElementById('profile_telephoneNumber').focus();
  //   }
  
  // }
  //pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
  // const person = {
  //   fname: document.getElementById("fname").value,
  //   lname: document.getElementById("lname").value,
  //   mobilenum: document.getElementById("mobilenum").value,
  //   mail: document.getElementById("email").value,
  //   username: mobilenum,
  //   password: document.getElementById("password").value
  // }
  // localStorage.setItem('username', JSON.stringify(person));
  // // window.open("result.html", "_blank");
  
  
  
  // function clickme()
  // {
  //  var fname=document.getElementById("fname").value;
  // var lname=document.getElementById("lname").value; 
  
  // var password=document.getElementById("password").value;
  // //var rpassword=document.getElementById("rpassword").value;
  // //var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // var mail=document.getElementById("email").value;
  // var mobilenum=document.getElementById("mobilenum").value;  
  // document.write("fname"+fname+",lname"+lname+"mobilenum"+mobilenum+"mail"+mail+"password"+password+"welcome to new page");
  // }
  
  
  
  // function enterPassword()
  // {
  //     var x=document.getElementById("").value;
  
  // }
  // $(document).ready(function (){
  //   $('.keyup-email').keyup(function () {
  //     debugger;
  //     var inputVal = $(this).val();
  //     var emailReg = /^[a-z0-9_\+-]+(\.[a-z0-9_\+-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*\.([a-z]{2,4})$/;
  //     if (!emailReg.test(inputVal)) {
  //       alert('<span style="color:red">Invalid Email.</span>');
  //     }
  // });  
  // });
  
  
  
  // function phonenumber() 
  // {
  //  // var regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
  //  //var regex =/^[6-9]\d{9}$/;
  //  debugger;
  //     var mob =/^[6-9]\d{9}$/;
  //     var regmob = new RegExp(mob);
  //     //var mob= r(x);
  //     var txtMobile = document.getElementById("mobilenum");
  //     if (!regmob.test(txtMobile.value))
  //      {
  //         document.getElementById("m2").innerHTML="enter valid mobile number";
  //         document.getElementById("mobilenum").focus();
  //         return false;
  //     }
  //     else
  //     {
  //     return true;
  //     }
  // }
  
  // function passwordcheck() {
  //   var password1 = document.getElementById("pass");
  //   var password2 = document.getElementById(" rpass").value;
  
  //   if (password1.value === password2) { 
  //     alert ("\nPassword did not match: Please try again...") 
  //     return false; 
  // } 
  
  // // If same return True. 
  // else{ 
  //     alert("Password Match") 
  //     return true; 
  // }
  // }
  
  //   if (pass == rpass) 
  //   {
  //     alert("enter the correct password")
  //       pass.style.backgroundColor = "green";
  //       return true;
  //   }
  //   else
  //   return false;
  // }
  // function passwordcheck()
  // {
  // var myInput = document.getElementById("password");
  // var letter = document.getElementById("letter");
  // var capital = document.getElementById("capital");
  // var number = document.getElementById("number");
  // var length = document.getElementById("length");
  
  // // When the user clicks on the password field, show the message box
  // myInput.onfocus = function() {
  //   document.getElementById("message").style.display = "block";
  // }
  
  // // When the user clicks outside of the password field, hide the message box
  // myInput.onblur = function() {
  //   document.getElementById("message").style.display = "none";
  // }
  
  // // When the user starts to type something inside the password field
  // myInput.onkeyup = function() {
  //   // Validate lowercase letters
  //   var lowerCaseLetters = /[a-z]/g;
  //   if(myInput.value.match(lowerCaseLetters)) {  
  //     letter.classList.remove("invalid");
  //     letter.classList.add("valid");
  //   } else {
  //     letter.classList.remove("valid");
  //     letter.classList.add("invalid");
  //   }
  
  //   // Validate capital letters
  //   var upperCaseLetters = /[A-Z]/g;
  //   if(myInput.value.match(upperCaseLetters)) {  
  //     capital.classList.remove("invalid");
  //     capital.classList.add("valid");
  //   } else {
  //     capital.classList.remove("valid");
  //     capital.classList.add("invalid");
  //   }
  
  //   // Validate numbers
  //   var numbers = /[0-9]/g;
  //   if(myInput.value.match(numbers)) {  
  //     number.classList.remove("invalid");
  //     number.classList.add("valid");
  //   } else {
  //     number.classList.remove("valid");
  //     number.classList.add("invalid");
  //   }
  
  //   // Validate length
  //   if(myInput.value.length >= 8) {
  //     length.classList.remove("invalid");
  //     length.classList.add("valid");
  //   } else {
  //     length.classList.remove("valid");
  //     length.classList.add("invalid");
  //   }
  // }
  // }
  // <!-- The core Firebase JS SDK is always required and must be listed first -->
  // <script src="/__/firebase/7.18.0/firebase-app.js"></script>
  
  // <!-- TODO: Add SDKs for Firebase products that you want to use
  //      https://firebase.google.com/docs/web/setup#available-libraries -->
  // <script src="/__/firebase/7.18.0/firebase-analytics.js"></script>
  
  // <!-- Initialize Firebase -->
  // <script src="/__/firebase/init.js"></script>
  
  
  
  
  
  
  
  
  
  
  // else {
    //   var FirstName = document.getElementById("fname").value;
    //   var lastName = document.getElementById("lname").value;
    //   var Password = document.getElementById("password").value;
    //   //var rpassword = document.getElementById("rpassword").value;
    //   var MailId = document.getElementById("email").value;
    //   var MobileNumber = document.getElementById("mobilenum").value;
    //   document.write("FirstName" + FirstName + ",lastName" + lastName + "MobileNumber" + MobileNumber + "MailId" + MailId + "Password" + Password + "/n welcome to new page "+FirstName);
    //   return true;
  
  
  
  
  
  
  
    // window.open("result.html", "_blank");
  
  
  
  //    else if(rpassword.length<7)
  //     {  
  //   alert("Password must be in between 7 to 14.");  
  //   return false;  
  //     } 
  // else if(password.localeCompare(rpassword))
  // {
  //   alert("password not matched");
  //   return false;
  // }
  // else
  // {
  
  //     return true;
  // }
  
  
  