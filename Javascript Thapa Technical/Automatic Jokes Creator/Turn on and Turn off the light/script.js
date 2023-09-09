const bulb = document.getElementById("bulb");
const toggleBtn = document.getElementById("toggleBtn");

// Function to toggle the bulb state
function toggleBulb() {
    if (bulb.classList.contains("on")) {
        bulb.classList.remove("on");
        bulb.classList.add("off");
    } else {
        bulb.classList.remove("off");
        bulb.classList.add("on");
    }
}

// Event listener for the "Toggle Bulb" button
toggleBtn.addEventListener("click", toggleBulb);
