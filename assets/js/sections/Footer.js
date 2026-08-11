import { createElement } from "../core/index.js";
import { profile } from "../data/index.js";

/**
 * Cria o rodapé do portfólio.
 *
 * @returns {HTMLElement}
 */
export function createFooter() {
    const currentYear = new Date().getFullYear();

    const links = createElement(
        "nav",
        {
            className: "footer-links",

            attributes: {
                "aria-label": "Links do rodapé",
            },
        },

        createElement(
            "a",
            {
                attributes: {
                    href: profile.social.github,
                    target: "_blank",
                    rel: "noopener noreferrer",
                },
            },
            "GitHub"
        ),

        createElement(
            "a",
            {
                attributes: {
                    href: profile.social.linkedin,
                    target: "_blank",
                    rel: "noopener noreferrer",
                },
            },
            "LinkedIn"
        ),

        createElement(
            "a",
            {
                attributes: {
                    href: "#home",
                },
            },
            "Voltar ao topo"
        )
    );

    return createElement(
        "footer",
        {
            className: "footer",
        },

        createElement(
            "div",
            {
                className: "container footer-container",
            },

            createElement(
                "p",
                {
                    className: "footer-copy",
                },
                `© ${currentYear} ${profile.name}.`
            ),

            links
        )
    );
}
