// This tells particles.js to use the div with id 'particles-js' and defines how particles look and behave
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80, // How many particles
            "density": { "enable": true, "value_area": 800 }
        },
        "color": { "value": "#00e6ff" }, // Color of the particles
        "shape": { "type": "circle" }, // Shape of particles (e.g., "circle", "triangle")
        "opacity": { "value": 0.5, "random": false }, // How transparent they are
        "size": { "value": 3, "random": true }, // Size of particles
        "line_linked": {
            "enable": true, // Connect particles with lines
            "distance": 150,
            "color": "#ff00cc", // Color of the lines
            "opacity": 0.4,
            "width": 1
        },
        "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out" } // How particles move
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "grab" }, // What happens when you hover over them ("grab", "bubble", "repulse")
            "onclick": { "enable": true, "mode": "push" }, // What happens when you click them ("push", "remove")
            "resize": true
        },
        "modes": {
            "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
            "push": { "particles_nb": 4 } // For "push" on click
        }
    },
    "retina_detect": true
});
