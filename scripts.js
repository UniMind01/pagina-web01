document.addEventListener("DOMContentLoaded", function() {
    var loginModal = document.getElementById("loginModal");
    var registerModal = document.getElementById("registerModal");

    var loginBtn = document.getElementById("loginBtn");
    var registerBtn = document.getElementById("registerBtn");

    var closeLoginModal = document.getElementById("closeLoginModal");
    var closeRegisterModal = document.getElementById("closeRegisterModal");

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
});
