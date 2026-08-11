/**
 * Inicializa o menu de navegação mobile.
 */
export function initMenu() {
    const menuButton =
        document.querySelector(".menu-toggle");

    const navMenu =
        document.querySelector(".nav-menu");

    if (!menuButton || !navMenu) {
        return;
    }

    function closeMenu() {
        navMenu.classList.remove("nav-menu--open");

        menuButton.classList.remove(
            "menu-toggle--active"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Abrir menu"
        );
    }

    function openMenu() {
        navMenu.classList.add("nav-menu--open");

        menuButton.classList.add(
            "menu-toggle--active"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        menuButton.setAttribute(
            "aria-label",
            "Fechar menu"
        );
    }

    function toggleMenu() {
        const isOpen =
            navMenu.classList.contains(
                "nav-menu--open"
            );

        if (isOpen) {
            closeMenu();
            return;
        }

        openMenu();
    }

    menuButton.addEventListener(
        "click",
        toggleMenu
    );

    navMenu
        .querySelectorAll("a")
        .forEach((link) => {
            link.addEventListener(
                "click",
                closeMenu
            );
        });

    window.addEventListener(
        "resize",
        () => {
            if (window.innerWidth > 700) {
                closeMenu();
            }
        }
    );
}
