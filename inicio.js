const btnSingIn = document.getElementById("sing-in"),
      btnSingUp = document.getElementById("sing-up"),
      formrRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

btnSingIn.addEventListener("click", e => {
    formrRegister.classList.add("hide");
    formLogin.classList.remove("hide")
})

btnSingUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formrRegister.classList.remove("hide")
})