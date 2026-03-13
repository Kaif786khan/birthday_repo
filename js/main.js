document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const cardContainer = document.querySelector(".cards-container");
    const originalImages = ["teddy1.jpg", "teddy2.jpg", "teddy4.jpg"];
    const expandedImages = ["z1.jpeg", "z2.jpeg", "z3.jpeg"];

    cards.forEach((card, index) => {
        const cardImage = card.querySelector(".card-image");

        card.addEventListener("click", function () {
            const isActive = card.classList.contains("active");

            // Remove active from all cards and reset to original images
            cards.forEach((c, i) => {
                c.classList.remove("active");
                const img = c.querySelector(".card-image");
                img.style.backgroundImage = `url('assets/images/${originalImages[i]}')`;
            });

            // If this card wasn't active, make it active and swap to expanded image
            if (!isActive) {
                card.classList.add("active");
                cardImage.style.backgroundImage = `url('assets/images/${expandedImages[index]}')`;
                cardContainer.classList.add("has-active");
            } else {
                // If clicking active card again, collapse it
                cardContainer.classList.remove("has-active");
            }
        });
    });

    // Close expanded card when clicking outside
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".card") && !e.target.closest(".cards-container")) {
            cards.forEach(c => c.classList.remove("active"));
            cardContainer.classList.remove("has-active");
        }
    });
});
