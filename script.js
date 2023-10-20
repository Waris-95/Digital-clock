let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

setInterval(() => {


    let currentTime = new Date();

    // console.log(currentTime.getHours());

    hrs.innerHTML = (currentTime.getHours() < 10?"0":"") + currentTime.getHours();
    mins.innerHTML = (currentTime.getMinutes() < 10?"0":"") + currentTime.getMinutes();
    secs.innerHTML = (currentTime.getSeconds() < 10?"0":"") + currentTime.getSeconds();
      },1000)

      // added functionality to switch between themes.
      document.getElementById('themeSwitcher').addEventListener('click', function() {
        // apply a class for the fading effect.
        document.body.classList.toggle('transitioning-theme');

        // delay toggling the dark theme class to allow the fade effect
        setTimeout(function() {   
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('transitioning-theme')
       }, ); // Match the 1s delay with the css transition .
        });