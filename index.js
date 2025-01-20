document.getElementById("toggleButton").addEventListener("click", function() {
    let content = document.getElementById("moreContent");
    let card = content.closest(".card");
    if (content.classList.contains("expanded")) {
        content.classList.remove("expanded");
        setTimeout(() => content.style.display = "none", 500);
        this.textContent = "Learn More";
    } else {
        content.style.display = "block";
        setTimeout(() => content.classList.add("expanded"), 10);
        this.textContent = "Show Less";
    }
});

document.getElementById("toggleButtonEnergy").addEventListener("click", function() {
    let content = document.getElementById("moreContentEnergy");
    if (content.classList.contains("expanded")) {
        content.classList.remove("expanded");
        setTimeout(() => content.style.display = "none", 500);
        this.textContent = "Learn More";
    } else {
        content.style.display = "block";
        setTimeout(() => content.classList.add("expanded"), 10);
        this.textContent = "Show Less";
    }
});

document.getElementById("toggleButtonPsychology").addEventListener("click", function() {
    let content = document.getElementById("moreContentPsychology");
    if (content.classList.contains("expanded")) {
        content.classList.remove("expanded");
        setTimeout(() => content.style.display = "none", 500);
        this.textContent = "Learn More";
    } else {
        content.style.display = "block";
        setTimeout(() => content.classList.add("expanded"), 10);
        this.textContent = "Show Less";
    }
});

document.getElementById("toggleButtonWater").addEventListener("click", function() {
    let content = document.getElementById("moreContentWater");
    if (content.classList.contains("expanded")) {
        content.classList.remove("expanded");
        setTimeout(() => content.style.display = "none", 500);
        this.textContent = "Learn More";
    } else {
        content.style.display = "block";
        setTimeout(() => content.classList.add("expanded"), 10);
        this.textContent = "Show Less";
    }
});

document.getElementById("toggleButtonPlastic").addEventListener("click", function() {
let content = document.getElementById("moreContentPlastic");
if (content.classList.contains("expanded")) {
    content.classList.remove("expanded");
    setTimeout(() => content.style.display = "none", 500);
    this.textContent = "Learn More";
} else {
    content.style.display = "block";
    setTimeout(() => content.classList.add("expanded"), 10);
    this.textContent = "Show Less";
}
});
document.addEventListener("DOMContentLoaded", function () {
const toggleButtonAgriculture = document.getElementById("toggleButtonAgriculture");
const moreContentAgriculture = document.getElementById("moreContentAgriculture");

toggleButtonAgriculture.addEventListener("click", function () {
const isExpanded = moreContentAgriculture.classList.contains("expanded");
moreContentAgriculture.classList.toggle("expanded", !isExpanded);
toggleButtonAgriculture.textContent = isExpanded ? "Learn More" : "Show Less";
});
});
document.querySelectorAll('.toggle-button').forEach(button => {
let clickCount = 0; // Track the number of clicks

button.addEventListener('click', () => {
    const hiddenInfo = button.closest('.card').querySelector('.hidden-info');

    if (clickCount === 0) {
        hiddenInfo.classList.add('active'); // Show additional info
        button.textContent = "Show Less";
    } else if (clickCount === 1) {
        hiddenInfo.classList.remove('active'); // Hide info again
        button.textContent = "Learn More";
    }

    clickCount = (clickCount + 1) % 2; // Reset after two clicks
});
});