
// TMaps Business Manager - TBM-8
// Navigation, page d'accueil et fenêtres des fonctionnalités

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. NAVIGATION ET MENU MOBILE - TBM-6 / TBM-7
    // ==========================================

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
                                link.getAttribute("href") ===
                                `#${entry.target.id}`;

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


    // ==========================================
    // 2. DONNÉES DES FONCTIONNALITÉS - TBM-8
    // ==========================================

    const features = {

        gestion: {
            title: "Gestion des établissements",
            category: "ORGANISATION",
            icon: "▦",
            color: "icon-blue",
            description:
                "Centralisez les informations de vos établissements. " +
                "Ajoutez, consultez, modifiez et supprimez les informations " +
                "pour faciliter leur gestion."
        },

        cartographie: {
            title: "Cartographie interactive",
            category: "LOCALISATION",
            icon: "⌖",
            color: "icon-purple",
            description:
                "Visualisez la localisation géographique de vos établissements. " +
                "Explorez leur répartition et retrouvez plus facilement " +
                "les différentes implantations."
        },

        recherche: {
            title: "Recherche et filtrage",
            category: "RECHERCHE",
            icon: "⌕",
            color: "icon-green",
            description:
                "Retrouvez rapidement un établissement grâce à son nom, " +
                "sa ville ou sa catégorie. Les critères de recherche " +
                "facilitent l'accès aux informations."
        },

        dashboard: {
            title: "Tableau de bord",
            category: "ANALYSE",
            icon: "▥",
            color: "icon-orange",
            description:
                "Consultez une vue générale de vos établissements. " +
                "Suivez les indicateurs et les statistiques pour mieux " +
                "comprendre et analyser vos données."
        }
    };


    // ==========================================
    // 3. RÉCUPÉRER LES ÉLÉMENTS DE LA MODALE
    // ==========================================

    const modal = document.getElementById("featureModal");
    const closeButton = document.getElementById("modalClose");
    const closeButtonBottom =
        document.getElementById("modalCloseButton");

    const modalTitle = document.getElementById("modalTitle");
    const modalCategory = document.getElementById("modalCategory");
    const modalDescription =
        document.getElementById("modalDescription");
    const modalIcon = document.getElementById("modalIcon");


    // ==========================================
    // 4. OUVRIR LA FENÊTRE MODALE
    // ==========================================

    function openModal(featureKey, triggerElement) {

        const feature = features[featureKey];

        if (!feature || !modal) return;

        // Ajouter les informations de la fonctionnalité
        modalTitle.textContent = feature.title;
        modalCategory.textContent = feature.category;
        modalDescription.textContent = feature.description;

        modalIcon.textContent = feature.icon;
        modalIcon.className = "feature-icon " + feature.color;

        // Afficher la fenêtre
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

        // Mémoriser le lien qui a ouvert la fenêtre
        modal.dataset.trigger = triggerElement ? "true" : "false";

        if (closeButton) {
            closeButton.focus();
        }
    }


    // ==========================================
    // 5. FERMER LA FENÊTRE MODALE
    // ==========================================

    function closeModal() {

        if (!modal) return;

        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

    }


    // ==========================================
    // 6. GÉRER LES CLICS SUR LES 4 LIENS
    // ==========================================

    document.querySelectorAll(".feature-link[data-feature]")
        .forEach((link) => {

            link.addEventListener("click", (event) => {

                event.preventDefault();

                const featureKey = link.dataset.feature;

                openModal(featureKey, link);
            });
        });


    // ==========================================
    // 7. BOUTONS DE FERMETURE
    // ==========================================

    if (closeButton) {
        closeButton.addEventListener("click", closeModal);
    }

    if (closeButtonBottom) {
        closeButtonBottom.addEventListener("click", closeModal);
    }


    // ==========================================
    // 8. FERMER EN CLIQUANT À L'EXTÉRIEUR
    // ==========================================

    if (modal) {

        modal.addEventListener("click", (event) => {

            if (event.target === modal) {
                closeModal();
            }
        });
    }


    // ==========================================
    // 9. FERMER AVEC LA TOUCHE ÉCHAP
    // ==========================================

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            modal &&
            modal.classList.contains("active")
        ) {
            closeModal();
        }
    });

});
