// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset; 
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;   
    if (prevScrollpos > currentScrollPos) {
        // if mobile, hide navbar on scroll
        // if (window.innerWidth < 768) {
        //     document.getElementById("hireMeLink").style.bottom = "-75px";
        // } else {
             // document.getElementById("navbar").style.top = "0";
            document.getElementById("hireMeLink").style.top = "-20%";
            document.getElementById("hireMeLink").style.opacity = "0";
        // }
    } else {
        // if (window.innerWidth < 768) {
        //     document.getElementById("hireMeLink").style.bottom = "0";
        //     document.getElementById("hireMeLink").style.transition = "bottom .5s";
        // } else {
            // document.getElementById("navbar").style.top = "-75px";
            document.getElementById("hireMeLink").style.top = "0"
            document.getElementById("hireMeLink").style.opacity = "1";
        // }
    }
    prevScrollpos = currentScrollPos;
    }


