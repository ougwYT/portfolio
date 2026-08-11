import { createElement } from "../core/index.js";

import {
    createButton,
    createSectionHeader,
} from "../components/index.js";

import { profile } from "../data/index.js";

/**
 * Cria a seção de contato.
 *
 * @returns {HTMLElement}
 */
export function createContact() {
    const actions = createElement(
        "div",
        {
            className: "contact-actions",
        },

        createButton({
            text: "Enviar e-mail",
            href: `mailto:${profile.contact.email}`,
        }),

        createButton({
            text: "LinkedIn",
            href: profile.social.linkedin,
            variant: "outline",
            external: true,
        }),

        createButton({
            text: "GitHub",
            href: profile.social.github,
            variant: "outline",
            external: true,
        })
    );

    const emailLink = createElement(
        "a",
        {
            className: "contact-email",

            attributes: {
                href: `mailto:${profile.contact.email}`,
                "aria-label": `Enviar e-mail para ${profile.contact.email}`,
            },
        },

        profile.contact.email
    );

    const contactCard = createElement(
        "div",
        {
            className: "contact-card card",
        },

        createSectionHeader({
            title: "Vamos conversar?",
            description:
                "Estou aberto a oportunidades profissionais, colaborações em projetos e novos desafios em desenvolvimento de software.",
        }),

        emailLink,

        actions
    );

    return createElement(
        "section",
        {
            className: "contact",
            id: "contact",
        },

        createElement(
            "div",
            {
                className: "container",
            },

            contactCard
        )
    );
}
