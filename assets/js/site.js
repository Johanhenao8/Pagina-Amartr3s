(function () {
    document.addEventListener("DOMContentLoaded", function () {
        document.body.classList.remove("is-preload");

        var navToggle = document.querySelector(".nav-toggle");
        if (navToggle) {
            var navMenu = document.getElementById(navToggle.getAttribute("aria-controls"));

            if (navMenu) {
                var closeMenu = function () {
                    navMenu.classList.remove("is-open");
                    navToggle.setAttribute("aria-expanded", "false");
                };

                var toggleMenu = function () {
                    var isOpen = navMenu.classList.toggle("is-open");
                    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
                };

                navToggle.addEventListener("click", toggleMenu);

                navMenu.querySelectorAll("a").forEach(function (link) {
                    link.addEventListener("click", closeMenu);
                });

                document.addEventListener("keydown", function (event) {
                    if (event.key === "Escape") {
                        closeMenu();
                    }
                });

                window.addEventListener("resize", function () {
                    if (window.innerWidth > 720) {
                        closeMenu();
                    }
                });
            }
        }

        var revealTargets = document.querySelectorAll(
            ".panel, .line-card, .gallery-card, .contact-panel, .item-card, .intro-card"
        );

        revealTargets.forEach(function (el) {
            el.classList.add("reveal");
        });

        if ("IntersectionObserver" in window) {
            var observer = new IntersectionObserver(
                function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("is-visible");
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.12 }
            );

            revealTargets.forEach(function (el) {
                observer.observe(el);
            });
        } else {
            revealTargets.forEach(function (el) {
                el.classList.add("is-visible");
            });
        }
    });
})();
