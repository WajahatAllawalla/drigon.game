var drigon = document.getElementById("drigon");
var rock = document.getElementById("rock");
var score = document.getElementById("score");

function jump(event) {
  // Check if spacebar is pressed
  if (event.key === ' ') {
    // Add the "jump" class to drigon if it doesn't already have it
    if (!drigon.classList.contains("jump")) {
      drigon.classList.add("jump");

      // Remove the "jump" class after the animation completes
      setTimeout(function() {
        drigon.classList.remove("jump");
      }, 500); // Adjust timing if needed
    }
  }
  console.log("Key pressed:", event.key);
}

// Listen for keypress event on the window
window.addEventListener('keypress', jump);


