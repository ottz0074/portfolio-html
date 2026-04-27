const botao = document.getElementById("botaoTema");

function toggleTema() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        botao.textContent = "☀️";
    } else {
        botao.textContent = "🌙";
    }
}