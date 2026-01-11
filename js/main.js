document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            const isActive = card.classList.contains("active");

            cards.forEach(c => c.classList.remove("active"));

            if (!isActive) {
                card.classList.add("active");
            }
        });
    });
});
