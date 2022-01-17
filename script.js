const showPasswordIcon = document.querySelector("i.fa-eye");
const loginPassword = document.getElementById("loginPassword");

showPasswordIcon.addEventListener("click", showPassword);

function showPassword() {
    if (loginPassword.type === "password") {
        showPassword.type = "text";
        showPasswordIcon.style.color = "red";
    } else {
        loginPassword.type === "password";
        showPasswordIcon.style.color = "#ddd";
    }
}

