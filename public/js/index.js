let toggle = document.getElementById('btnToggle');
let passwordInput = document.getElementById('txtcvc');
var txtname = document.getElementById('txtcardname');
var txtcvc = document.getElementById('txtcvc');
let txtdate = document.getElementById('txtdate');
let txtnum = document.getElementById('txtcardnum');
let gobtn = document.getElementById('gobtn');

function togglePassword() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    //toggle.innerHTML = 'hide';
  } else {
    passwordInput.type = 'password';
    //toggle.innerHTML = 'show';
  }
}

/*function disabler() {
  txtname.value = "";
  txtcvc.value = "";
  txtdate.value = "";
  txtnum.value = "";
  //find something to disable this
}*/


toggle.addEventListener('click', togglePassword, false);
gobtn.addEventListener('click',disabler, false);
//passwordInput.addEventListener('keyup', checkInput, false);
