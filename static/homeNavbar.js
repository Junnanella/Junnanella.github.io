let prevScrollpos = window.screenY;

window.onscroll = function () {
  const currentScrollPos = window.screenY;

  // Check if user is scrolling up
  if (prevScrollpos > currentScrollPos) {
    // Show the navbar
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.opacity = "1";
  } else {
    // Hide the navbar
    document.getElementById("navbar").style.top = "-20%";
    document.getElementById("navbar").style.opacity = "0";
  }

  // Update the previous scroll position
  prevScrollpos = currentScrollPos;
};
