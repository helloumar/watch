const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");

hamburger.addEventLintener("click", ()=>{

    navlinks.classList.toggle("navlinks-active");
})