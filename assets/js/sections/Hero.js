import { createElement } from "../core/index.js";

import {
    createBadge,
    createButton,
} from "../components/index.js";

import { profile } from "../data/index.js";

/**
 * Cria a seção principal do portfólio.
 *
 * @returns {HTMLElement}
 */
export function createHero() {
    const actions = createElement(
        "div",
        {
            className: "hero-buttons",
        },

        createButton({
            text: "GitHub",
            href: profile.social.github,
            external: true,
        }),

        createButton({
            text: "LinkedIn",
            href: profile.social.linkedin,
            variant: "secondary",
            external: true,
        }),

        createButton({
            text: "Download CV",
            href: profile.resume.url,
            variant: "outline",
            download: profile.resume.filename,
        })
    );

    const badges = createElement(
    "div",
    {
        className: "hero-badges",
    },

    profile.focus.map((technology) =>
        createBadge(technology)
    )
);

    const heroContent = createElement(
        "div",
        {
            className: "hero-content",
        },

        createElement(
            "p",
            {
                className: "hero-eyebrow",
            },
            "👋 Olá, eu sou"
        ),

        createElement(
            "h1",
            {},
            profile.name
        ),

        createElement(
            "h2",
            {},
            profile.headline
        ),

        createElement(
            "p",
            {
                className: "hero-description",
            },
            profile.description
        ),

        actions,

        badges
    );

    const heroCard = createElement(
        "aside",
        {
            className: "hero-card card",
        },

        createElement(
            "h3",
            {},
            "Atualmente"
        ),

        createElement(
            "p",
            {},
            `🎓 ${profile.education.course}`
        ),

        createElement(
            "p",
            {},
            "🐍 Foco em Python"
        ),

        createElement(
            "p",
            {},
            "⚙️ Automação"
        ),

        createElement(
            "p",
            {},
            "🐧 Linux"
        ),

        createElement(
            "p",
            {},
            "📚 Aprendizado contínuo"
        )
    );

    return createElement(
        "section",
        {
            className: "hero",
            id: "home",
        },

        createElement(
            "div",
            {
                className: "container hero-container",
            },

            heroContent,

            heroCard
        )
    );
}
