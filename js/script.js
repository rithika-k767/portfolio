// Initialize AOS Animation

AOS.init({

    duration: 1000,
    once: true,
    offset: 100

});

// ===========================
// Typed.js Animation
// ===========================
// ===========================
// Typed.js Animation
// ===========================
if (document.getElementById("typing")) {
    new Typed("#typing", {
        strings: [
            "Technical Analyst Intern"
        ],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });
}

// ===========================
// Particles Background
// ===========================

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },

        color: {
            value: "#00D9FF"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#00D9FF",
            opacity: 0.4,
            width: 1
        },

        move: {
            enable: true,
            speed: 2
        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            }

        },

        modes: {

            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },

            push: {
                particles_nb: 4
            }

        }

    },

    retina_detect: true

});
// =========================================
// BACK TO TOP BUTTON
// =========================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
