
// TMaps Business Manager - TBM-6
// Interactions de la page d'accueil

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const currentYear = document.getElementById("currentYear");

    // Afficher l'année automatiquement
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Ouvrir et fermer le menu mobile
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Fermer le menu" : "Ouvrir le menu"
            );
        });

        // Fermer le menu après un clic sur un lien
        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Ouvrir le menu");
            });
        });
    }

    // Mettre en évidence le lien correspondant à la section visible
    const sections = document.querySelectorAll("main section[id]");
    const navigationLinks = document.querySelectorAll(".nav-link");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        navigationLinks.forEach((link) => {
                            const isActive =
                                link.getAttribute("href") === `#${entry.target.id}`;

                            link.classList.toggle("active", isActive);
                        });
                    }
                });
            },
            {
                rootMargin: "-35% 0px -55% 0px"
            }
        );

        sections.forEach((section) => observer.observe(section));
    }
});
