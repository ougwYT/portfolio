import { createElement } from "../core/index.js";
import { profile } from "../data/index.js";

/**
 * Links principais da navegação.
 */
const navLinks = [
    {
        label: "Início",
        href: "#home",
    },
    {
        label: "Sobre",
        href: "#about",
    },
    {
        label: "Competências",
        href: "#skills",
    },
    {
        label: "Projetos",
        href: "#projects",
    },
    {
        label: "Experiência",
        href: "#experience",
    },
    {
        label: "Formação",
        href: "#education",
    },
    {
        label: "Contato",
        href: "#contact",
    },
];

/**
 * Cria a barra de navegação.
 *
 * @returns {HTMLElement}
 */
export function createNavbar() {
    const navMenu = createElement(
        "ul",
        {
            className: "nav-menu",
            attributes: {
                id: "nav-menu",
            },
        },

        navLinks.map((link) =>
            createElement(
                "li",
                {},
                createElement(
                    "a",
                    {
                        attributes: {
                            href: link.href,
                        },
                    },
                    link.label
                )
            )
        )
    );

    const themeButton = createElement(
        "button",
        {
            className: "theme-toggle",

            attributes: {
                type: "button",
                "aria-label": "Alternar tema",
            },
        },
        "🌙"
    );

    const menuButton = createElement(
        "button",
        {
            className: "menu-toggle",

            attributes: {
                type: "button",
                "aria-label": "Abrir menu",
                "aria-expanded": "false",
                "aria-controls": "nav-menu",
            },
        },

        createElement(
            "span",
            {
                className: "menu-toggle-line",
            }
        ),

        createElement(
            "span",
            {
                className: "menu-toggle-line",
            }
        ),

        createElement(
            "span",
            {
                className: "menu-toggle-line",
            }
        )
    );

    const navbar = createElement(
        "nav",
        {
            className: "navbar",

            attributes: {
                "aria-label": "Navegação principal",
            },
        },

        createElement(
            "a",
            {
                className: "logo",

                attributes: {
                    href: "#home",
                },
            },
            profile.name
        ),

        navMenu,

        createElement(
            "div",
            {
                className: "navbar-actions",
            },

            themeButton,
            menuButton
        )
    );

    return createElement(
        "header",
        {
            className: "header",
        },

        createElement(
            "div",
            {
                className: "container",
            },

            navbar
        )
    );
}
