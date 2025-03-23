// Aguardando o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
    const santos = document.querySelectorAll(".santo");

    santos.forEach((santo) => {
        // Adicionando evento de click em cada div de santo
        santo.addEventListener("click", () => {
            santo.classList.toggle("zoom");
        });
    });
});
