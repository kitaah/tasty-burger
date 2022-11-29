document.addEventListener("DOMContentLoaded", () => {
    let navigation = document.getElementById("team-presentation");
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100){
        navigation.classList.add("tracking-in-expand");}
    });
});

