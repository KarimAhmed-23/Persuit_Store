
const colorSwitch = document.querySelector(".checkbox-mode");

var massenger_mode = document.getElementById('masenger-icon');

console.log(colorSwitch);

colorSwitch.addEventListener("click", checkMode);

function checkMode() {
  if (colorSwitch.checked) {
    console.log("dark on");
    darkModeOn();
  } else {
    darkModeOff();
  }
}

function darkModeOn() {
  document.body.classList.add("darkMode");
    massenger_mode.src = "img/777.png";
    
      window.scrollTo({
      
      top:0,
      behavior:"smooth"
  }) ; 

    
}

function darkModeOff() {
  document.body.classList.remove("darkMode");
massenger_mode.src = "img/iconmonstr-facebook-messenger-4.svg";
          window.scrollTo({
      
      top:0,
      behavior:"smooth"
  }) ; 

}




