// CONTACT BUTTON


document.querySelector(".form-submit").addEventListener("click", () => {
  alert("Message sent! I will get back to you soon.");
});


// FADE-IN ANIMATION ON SCROLL

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.2
});

fadeElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.8s ease";

    observer.observe(element);

});


// NAVBAR SHADOW ON SCROLL

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";

    } else {

        nav.style.boxShadow = "none";

    }

});