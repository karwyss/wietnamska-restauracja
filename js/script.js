// Funkcja do obsługi popupów
function setupModal(openBtnId, modalId) {
    const btn = document.getElementById(openBtnId);
    const modal = document.getElementById(modalId);
    if (btn && modal) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.showModal();
        });
        // Zamykanie przyciskiem X wewnątrz modala
        const closeBtn = modal.querySelector(".close-modal");
        if (closeBtn) {
            closeBtn.addEventListener("click", () => modal.close());
        }
        // Zamykanie po kliknięciu poza okno
        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.close();
        });
    }
}

// Inicjalizacja popupów
setupModal("openContact", "contactModal");
setupModal("openAbout", "aboutModal");

// OBSŁUGA HAMBURGERA
const hamburger = document.querySelector("#mobile-menu");
const navMenu = document.querySelector("nav ul");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        // console.log("Hamburger kliknięty!"); // Sprawdź w konsoli F12
        hamburger.classList.toggle("is-active");
        navMenu.classList.toggle("active");
    });

    // Zamykanie menu po kliknięciu w link
    document.querySelectorAll("nav a").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("is-active");
        navMenu.classList.remove("active");
    }));
}