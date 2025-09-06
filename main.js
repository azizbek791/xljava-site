// -------------------- Main JS --------------------

// -------------------- Index Page JS --------------------

// CTA button bosilganda alert va scroll effekt
const ctaBtn = document.querySelector(".cta-btn");
if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
        alert("Biz bilan bog'lanish tugmasi bosildi!");
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
}

// Services cards hover effekt
const serviceCards = document.querySelectorAll(".index-card");
serviceCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});

// Blog cards hover effekt
const blogCards = document.querySelectorAll(".index-blog-card");
blogCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    });
});

// -------------------- Admin Page JS --------------------

// Edit va Delete tugmalari alert
const editButtons = document.querySelectorAll(".admin-services-section button:nth-child(1)");
const deleteButtons = document.querySelectorAll(".admin-services-section button:nth-child(2)");

editButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        alert(`Xizmat ${index + 1} tahrirlash funksiyasi ishga tushdi.`);
    });
});

deleteButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const confirmDelete = confirm(`Xizmat ${index + 1}ni o'chirmoqchimisiz?`);
        if (confirmDelete) {
            alert(`Xizmat ${index + 1} o'chirildi!`);
        }
    });
});

// Admin Settings form submit
const settingsForm = document.querySelector(".admin-settings-section form");
if (settingsForm) {
    settingsForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Sozlamalar saqlandi!");
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById('background-music');
    const toggleBtn = document.getElementById('music-toggle');

    // Foydalanuvchi birinchi interaktivlik qilganda musiqa boshlansin
    const startMusic = () => {
        music.play().catch(() => console.log("Autoplay bloklandi"));
        toggleBtn.textContent = "⏸️";
        document.removeEventListener('click', startMusic);
        document.removeEventListener('scroll', startMusic);
    };

    document.addEventListener('click', startMusic);
    document.addEventListener('scroll', startMusic);

    // Tugma bilan play/pause ishlashi
    toggleBtn.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            toggleBtn.textContent = "⏸️";
        } else {
            music.pause();
            toggleBtn.textContent = "▶️";
        }
    });
});
