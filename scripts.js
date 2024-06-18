document.addEventListener("DOMContentLoaded", function() {
    var loginModal = document.getElementById("loginModal");
    var registerModal = document.getElementById("registerModal");

    var loginBtn = document.getElementById("loginBtn");
    var registerBtn = document.getElementById("registerBtn");
    var anonymousBtn = document.getElementById("anonymousBtn");

    var closeLoginModal = document.getElementById("closeLoginModal");
    var closeRegisterModal = document.getElementById("closeRegisterModal");

    var additionalInfo = document.getElementById("additionalInfo");

    loginBtn.onclick = function() {
        loginModal.style.display = "block";
    }

    registerBtn.onclick = function() {
        registerModal.style.display = "block";
    }

    closeLoginModal.onclick = function() {
        loginModal.style.display = "none";
    }

    closeRegisterModal.onclick = function() {
        registerModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target == registerModal) {
            registerModal.style.display = "none";
        }
    }

    function showAdditionalInfo() {
        loginBtn.style.display = "none";
        registerBtn.style.display = "none";
        anonymousBtn.style.display = "none";
        additionalInfo.style.display = "block";
    }

    // Evento para el botón "Acceder como anónimo"
    anonymousBtn.onclick = function() {
        showAdditionalInfo();
    }

    // Evento para el botón de inicio de sesión en el formulario
    document.getElementById("submitLogin").onclick = function() {
        loginModal.style.display = "none";
        showAdditionalInfo();
        return false; // Previene el envío del formulario
    }

    // Evento para el botón de registro en el formulario
    document.getElementById("submitRegister").onclick = function() {
        registerModal.style.display = "none";
        showAdditionalInfo();
        return false; // Previene el envío del formulario
    }
});
