console.log("iSTUDIO javascript is working!");

javascript
// =====================================
// SCROLL REVEAL ANIMATIONS
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const revealElements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-pop"
    );

    // Reveal everything immediately if reduced motion is preferred.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        revealElements.forEach(function (element) {
            element.classList.add("active");
        });

        return;
    }

    const observer = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    // Stop observing after the element appears.
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealElements.forEach(function (element) {
        observer.observe(element);
    });

});