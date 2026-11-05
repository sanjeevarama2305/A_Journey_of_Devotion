
// ==================================
// DEVOTION - JAVASCRIPT
// ==================================


// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

    menuBtn.textContent = isOpen ? "✕" : "☰";

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll("#navigation a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.textContent = "☰";

    });

});


// COPY MANTRAS

const copyButtons = document.querySelectorAll(".copy-btn");

const copyMessage = document.getElementById("copyMessage");

copyButtons.forEach(button => {

    button.addEventListener("click", async () => {

        const mantra = button.getAttribute("data-copy");

        try {

            await navigator.clipboard.writeText(mantra);

            copyMessage.textContent = "Mantra copied successfully! 🙏";

        } catch (error) {

            copyMessage.textContent =
                "Copy is unavailable in this browser. Please select the mantra manually.";

        }

    });

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// BACK TO TOP BUTTON

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
function openLogo() {
    document.getElementById("logoViewer").style.display = "flex";
}

function closeLogo() {
    document.getElementById("logoViewer").style.display = "none";
}