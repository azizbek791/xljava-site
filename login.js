// -------------------- Login JS --------------------

// Admin parol
const adminPassword = "azizbekamir121";

// Foydalanuvchi login (har qanday login va parol bilan kirish mumkin)
const userLoginBtn = document.getElementById("user-login-btn");
if (userLoginBtn) {
    userLoginBtn.addEventListener("click", function (e) {
        e.preventDefault(); // linkni to‘xtatib turadi
        // Har qanday foydalanuvchi login va parol bilan index.html ga kiradi
        window.location.href = "index.html";
    });
}

// Admin login (faqat to‘g‘ri parol bilan)
const adminLoginBtn = document.getElementById("admin-login-btn");
if (adminLoginBtn) {
    adminLoginBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const password = document.getElementById("admin-password").value;

        if (password === adminPassword) {
            // admin.html ga yo'naltirish
            window.location.href = "admin.html";
        } else {
            alert("Admin parol xato!");
        }
    });
}
