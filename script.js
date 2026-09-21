/* =====================================================
   SACHINI HASALANKA — PORTFOLIO
   SCRIPT.JS
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (
            navLinks.classList.contains("active")
        ) {

            menuToggle.setAttribute(
                "aria-label",
                "Close Menu"
            );

        } else {

            menuToggle.setAttribute(
                "aria-label",
                "Open Menu"
            );

        }

    });


    /* Close mobile menu */

    navLinks
        .querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-label",
                        "Open Menu"
                    );

                }
            );

        });

}


/* =====================================================
   DOM READY
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =================================================
           ANIMATED ELEMENTS
        ================================================= */

        const animatedElements =
            document.querySelectorAll(
                ".reveal, " +
                ".reveal-left, " +
                ".reveal-right, " +
                ".skill-item, " +
                ".timeline-item"
            );


        /* =================================================
           INTERSECTION OBSERVER
           SCROLL ANIMATION
        ================================================= */

        const observer =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "active"
                                );

                            } else {

                                /*
                                 * Remove active when
                                 * element leaves viewport.
                                 *
                                 * This allows animation
                                 * to replay when scrolling
                                 * back.
                                 */

                                entry.target.classList.remove(
                                    "active"
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.15,

                    rootMargin:
                        "0px 0px -80px 0px"
                }

            );


        /* Observe all elements */

        animatedElements.forEach(
            (element) => {

                observer.observe(element);

            }
        );


        /* =================================================
           NAVBAR CLICK ANIMATION
        ================================================= */

        const navItems =
            document.querySelectorAll(
                ".nav-links a"
            );


        navItems.forEach(
            (link) => {

                link.addEventListener(
                    "click",
                    function (event) {


                        const targetId =
                            this.getAttribute(
                                "href"
                            );


                        /* ---------------------------------
                           Only internal section links
                        --------------------------------- */

                        if (
                            !targetId ||
                            !targetId.startsWith("#")
                        ) {

                            return;

                        }


                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (!target) {

                            return;

                        }


                        event.preventDefault();


                        /* ---------------------------------
                           Close mobile menu
                        --------------------------------- */

                        if (navLinks) {

                            navLinks.classList.remove(
                                "active"
                            );

                        }


                        if (menuToggle) {

                            menuToggle.setAttribute(
                                "aria-label",
                                "Open Menu"
                            );

                        }


                        /* ---------------------------------
                           Smooth scroll
                        --------------------------------- */

                        target.scrollIntoView({

                            behavior: "smooth",

                            block: "start"

                        });


                        /* ---------------------------------
                           Reset target animations
                        --------------------------------- */

                        setTimeout(
                            () => {

                                const sectionElements =
                                    target.querySelectorAll(
                                        ".reveal, " +
                                        ".reveal-left, " +
                                        ".reveal-right, " +
                                        ".skill-item, " +
                                        ".timeline-item"
                                    );


                                sectionElements.forEach(
                                    (element) => {

                                        element.classList.remove(
                                            "active"
                                        );

                                    }
                                );


                                /*
                                 * Force browser reflow
                                 */

                                void target.offsetWidth;


                                /* -----------------------------
                                   Play animation again
                                ----------------------------- */

                                setTimeout(
                                    () => {

                                        sectionElements.forEach(
                                            (element) => {

                                                element.classList.add(
                                                    "active"
                                                );

                                            }
                                        );

                                    },
                                    60
                                );


                            },
                            500
                        );

                    }
                );
                }
            );


        /* =================================================
           SERVICE STAGGER
        ================================================= */

        document
            .querySelectorAll(
                ".service-card"
            )
            .forEach(
                (card, index) => {

                    card.style.transitionDelay =
                        `${index * 0.12}s`;

                }
            );


        /* =================================================
           PROJECT STAGGER
        ================================================= */

        document
            .querySelectorAll(
                ".project-card"
            )
            .forEach(
                (card, index) => {

                    card.style.transitionDelay =
                        `${index * 0.15}s`;

                }
            );


        /* =================================================
           CREATIVE WORK STAGGER
        ================================================= */

        document
            .querySelectorAll(
                ".creative-card"
            )
            .forEach(
                (card, index) => {

                    card.style.transitionDelay =
                        `${index * 0.1}s`;

                }
            );


        /* =================================================
           SKILLS STAGGER
        ================================================= */

        document
            .querySelectorAll(
                ".skill-item"
            )
            .forEach(
                (skill, index) => {

                    skill.style.transitionDelay =
                        `${index * 0.08}s`;

                }
            );


        /* =================================================
           TIMELINE STAGGER
        ================================================= */

        document
            .querySelectorAll(
                ".timeline-item"
            )
            .forEach(
                (item, index) => {

                    item.style.transitionDelay =
                        `${index * 0.15}s`;

                }
            );

    }
);