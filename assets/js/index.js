/* ================ Navbar ================== */
let themeToggleBtn = document.getElementById("theme-toggle-button");
let navLinks = document.querySelector(".nav-links");
let sections = document.querySelectorAll("section");
let heroSection = document.getElementById("hero-section");
let aboutSection = document.getElementById("about");
let portfolioSection = document.getElementById("portfolio");
let experienceSection = document.getElementById("experience");
let testimonialsSection = document.getElementById("testimonials");
let contactSection = document.getElementById("contact");

/* ============= Navbar Events ============ */
themeToggleBtn.addEventListener("click", function() {
    document.documentElement.classList.toggle("dark");
});

for (let index = 0; index < navLinks.children.length; index++) {
    navLinks.children[index].addEventListener("click", function() {

        for (let i = 0; i < navLinks.children.length; i++) {
            navLinks.children[i].classList.remove("active");
        }
    
        navLinks.children[index].classList.add("active");
    });
}

window.addEventListener("scroll", function () {

    let scrollPosition = window.scrollY+150;

    for (let i = 0; i < navLinks.children.length; i++) {
        navLinks.children[i].classList.remove("active");
    }

    if (scrollPosition < heroEnd) {
        navLinks.children[0].classList.add("active");
        scrollToTopBtn.classList.add("opacity-0", "invisible");
    }
    else if (scrollPosition < aboutEnd) {
        navLinks.children[1].classList.add("active");
        scrollToTopBtn.classList.remove("opacity-0", "invisible");
    }
    else if (scrollPosition < portfolioEnd) {
        navLinks.children[2].classList.add("active");
        scrollToTopBtn.classList.remove("opacity-0", "invisible");
    }
    else if (scrollPosition < experienceEnd) {
        navLinks.children[3].classList.add("active");
        scrollToTopBtn.classList.remove("opacity-0", "invisible");
    }
    else if (scrollPosition < testimonialsEnd) {
        navLinks.children[4].classList.add("active");
        scrollToTopBtn.classList.remove("opacity-0", "invisible");
    }
    else {
        navLinks.children[5].classList.add("active");
        scrollToTopBtn.classList.remove("opacity-0", "invisible");
    }
});

/* ============= Sections End ============ */
let heroEnd = heroSection.clientHeight;
let aboutEnd = heroEnd + aboutSection.clientHeight;
let portfolioEnd = aboutEnd + portfolioSection.clientHeight;
let experienceEnd = portfolioEnd + experienceSection.clientHeight;
let testimonialsEnd = experienceEnd + testimonialsSection.clientHeight;

/* ============== Portfolio ============= */
let portfolioFilters = document.getElementById("portfolio-filters");
let portfolioItems = Array.from(document.querySelectorAll(".portfolio-item"));

/* ============= Portfolio Event ============ */

for (let index = 0; index < portfolioFilters.children.length; index++) {

    portfolioFilters.children[index].addEventListener("click", function () {

        for (let i = 0; i < portfolioFilters.children.length; i++) {
            portfolioFilters.children[i].setAttribute("aria-pressed", "false");

            portfolioFilters.children[i].classList.remove(
                "active",
                "bg-linear-to-r",
                "from-primary",
                "to-secondary",
                "text-white",
                "shadow-lg",
                "shadow-primary/50"
            );

            portfolioFilters.children[i].classList.add(
                "bg-white",
                "dark:bg-slate-800",
                "text-slate-600",
                "dark:text-slate-300",
                "border",
                "border-slate-300",
                "dark:border-slate-700"
            );
        }

        this.setAttribute("aria-pressed", "true");

        this.classList.remove(
            "bg-white",
            "dark:bg-slate-800",
            "text-slate-600",
            "dark:text-slate-300",
            "border",
            "border-slate-300",
            "dark:border-slate-700"
        );

        this.classList.add(
            "active",
            "bg-linear-to-r",
            "from-primary",
            "to-secondary",
            "text-white",
            "shadow-lg",
            "shadow-primary/50"
        )

        let filter = this.getAttribute("data-filter");

        for (let j = 0; j < portfolioItems.length; j++) {
            let category = portfolioItems[j].getAttribute("data-category");

            if (filter === "all" || category === filter) {
                portfolioItems[j].classList.remove("hidden");
            } else {
                portfolioItems[j].classList.add("hidden");
            }
        }
    });

}

/* ==============  Scroll to Top Button  ============= */
let scrollToTopBtn = document.getElementById("scroll-to-top");

/* ============= Scroll to Top Button Event ============ */

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* ============== Testimonials ============= */
let testimonialsCarousel = document.querySelector("#testimonials-carousel");
let testimonialsItems = Array.from(document.querySelectorAll(".testimonial-card"));
let testimonialsPrevBtn = document.getElementById("prev-testimonial");
let testimonialsNextBtn = document.getElementById("next-testimonial");
let indicators = Array.from(document.querySelectorAll(".carousel-indicator"));

/* ============== Testimonials Event ============= */

let startIndex = 0;
let visibleCount = 3;
let totalItems = testimonialsItems.length;
let maxIndex = totalItems - visibleCount;

function showTestimonials() {
    for (let i = 0; i < totalItems; i++) {
        if (i >= startIndex && i < startIndex + visibleCount) {
            testimonialsItems[i].style.display = "flex";
        } else {
            testimonialsItems[i].style.display = "none";
        }
    }
}

function updateIndicators() {
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove("bg-accent");
        indicators[i].classList.add("bg-slate-400");
        indicators[i].setAttribute("aria-selected", "false");

        if (i === startIndex) {
            indicators[i].classList.remove("bg-slate-400");
            indicators[i].classList.add("bg-accent");
            indicators[i].setAttribute("aria-selected", "true");
        }
    }
}

testimonialsNextBtn.addEventListener("click", function () {
    if (startIndex < maxIndex) {
        startIndex++;
    } else {
        startIndex = 0;
    }
    showTestimonials();
    updateIndicators();
});

testimonialsPrevBtn.addEventListener("click", function () {
    if (startIndex > 0) {
        startIndex--;
    } else {
        startIndex = maxIndex;
    }
    showTestimonials();
    updateIndicators();
});

for (let i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener("click", function () {
        startIndex = i;
        showTestimonials();
        updateIndicators();
    });
}

showTestimonials();
updateIndicators();

/* ============== Settings Sidebar ============= */
let settingsToggleBtn = document.getElementById("settings-toggle");
let settingsSidebar = document.getElementById("settings-sidebar");
let closeSettingsBtn = document.getElementById("close-settings");
let fontOptions = document.querySelectorAll(".font-option");
let colorOptions = document.querySelectorAll("#theme-colors-grid button");
let resetBtn = document.getElementById("reset-settings");

/* ============== Settings Sidebar Event ============= */

settingsToggleBtn.addEventListener("click", function() {
    let isOpen = !settingsSidebar.classList.contains("translate-x-full");
    
    if (isOpen) {
        settingsSidebar.classList.add("translate-x-full");
        settingsSidebar.setAttribute("aria-hidden", "true");
        settingsToggleBtn.style.transform = "translateX(0)";
    } else {
        settingsSidebar.classList.remove("translate-x-full");
        settingsSidebar.setAttribute("aria-hidden", "false");
        settingsToggleBtn.style.transform = "translateX(-320px)"; 
    }
});

closeSettingsBtn.addEventListener("click", function() {
    settingsSidebar.classList.add("translate-x-full");
    settingsSidebar.setAttribute("aria-hidden", "true");
    settingsToggleBtn.style.transform = "translateX(0)";
});

document.addEventListener("click", function(e) {
    if (!settingsSidebar.contains(e.target) && !settingsToggleBtn.contains(e.target)) {
        settingsSidebar.classList.add("translate-x-full");
        settingsSidebar.setAttribute("aria-hidden", "true");
        settingsToggleBtn.style.transform = "translateX(0)";
    }
});

/* ============== Font Options Event ============= */

for (let i = 0; i < fontOptions.length; i++) {
    fontOptions[i].addEventListener("click", function() {
        for (let j = 0; j < fontOptions.length; j++) {
            fontOptions[j].classList.remove("active");
            fontOptions[j].setAttribute("aria-checked", "false");
        }
        
        this.classList.add("active");
        this.setAttribute("aria-checked", "true");
        
        let selectedFont = this.getAttribute("data-font");
        document.body.style.fontFamily = "'" + selectedFont + "', sans-serif";
        
        localStorage.setItem("selected-font", selectedFont);
    });
}

/* ============== Color Options Event ============= */

for (let i = 0; i < colorOptions.length; i++) {
    colorOptions[i].addEventListener("click", function() {
        for (let j = 0; j < colorOptions.length; j++) {
            colorOptions[j].classList.remove("ring-2", "ring-primary", "ring-offset-2");
        }
        
        this.classList.add("ring-2", "ring-primary", "ring-offset-2");
        
        let primaryColor = this.getAttribute("data-primary");
        let secondaryColor = this.getAttribute("data-secondary");
        
        document.documentElement.style.setProperty("--color-primary", primaryColor);
        document.documentElement.style.setProperty("--color-secondary", secondaryColor);
        
        localStorage.setItem("primary-color", primaryColor);
        localStorage.setItem("secondary-color", secondaryColor);
    });
}

/* ============== Reset Settings Event ============= */

resetBtn.addEventListener("click", function() {
    
    document.body.style.fontFamily = "'Tajawal', sans-serif";
    document.documentElement.style.setProperty("--color-primary", "#6366f1");
    document.documentElement.style.setProperty("--color-secondary", "#8b5cf6");
    
    for (let i = 0; i < fontOptions.length; i++) {
        fontOptions[i].classList.remove("active");
        fontOptions[i].setAttribute("aria-checked", "false");
        if (fontOptions[i].getAttribute("data-font") === "tajawal") {
            fontOptions[i].classList.add("active");
            fontOptions[i].setAttribute("aria-checked", "true");
        }
    }
    
    for (let i = 0; i < colorOptions.length; i++) {
        colorOptions[i].classList.remove("ring-2", "ring-primary", "ring-offset-2");
        if (colorOptions[i].getAttribute("data-primary") === "#6366f1") {
            colorOptions[i].classList.add("ring-2", "ring-primary", "ring-offset-2");
        }
    }
});