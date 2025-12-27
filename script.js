
let menu = window.document.querySelector("#icone")
let lista = window.document.querySelector("#lista")

menu.addEventListener("click", function() {
    lista.classList.toggle("aberto");
})