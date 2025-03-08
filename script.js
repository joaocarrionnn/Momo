document.addEventListener("DOMContentLoaded", () => {
    const rainContainer = document.querySelector(".rain-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💗";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Entre 2s e 5s
        heart.style.fontSize = Math.random() * 10 + 20 + "px"; // Tamanhos variados

        rainContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 200); // Criar corações constantemente
});
