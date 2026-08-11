import { createElement } from "../core/index.js";
import { createSectionHeader } from "../components/index.js";
import { profile } from "../data/index.js";

/**
 * Cria a seção "Sobre mim".
 *
 * @returns {HTMLElement}
 */
export function createAbout() {
    const aboutContent = createElement(
        "div",
        {
            className: "about-content",
        },

        createSectionHeader({
            title: "Sobre mim",
            description:
                "Sou estudante de Bacharelado em Ciência e Tecnologia na UFABC e venho direcionando meus estudos para desenvolvimento backend utilizando Python.",
        }),

        createElement(
            "p",
            {
                className: "about-description",
            },
            profile.about
        )
    );

    const aboutGrid = createElement(
        "div",
        {
            className: "about-grid",
        },

        createAboutCard(
            "🎓 Formação",
            profile.education.abbreviation
        ),

        createAboutCard(
            "🐍 Principal linguagem",
            "Python"
        ),

        createAboutCard(
            "📍 Localização",
            profile.location
        ),

        createAboutCard(
            "🎯 Objetivo",
            "Desenvolvimento Backend"
        )
    );

    return createElement(
        "section",
        {
            className: "about",
            id: "about",
        },

        createElement(
            "div",
            {
                className: "container about-container",
            },

            aboutContent,
            aboutGrid
        )
    );
}

/**
 * Cria um card informativo da seção About.
 *
 * @param {string} title
 * @param {string} value
 *
 * @returns {HTMLElement}
 */
function createAboutCard(title, value) {
    return createElement(
        "article",
        {
            className: "card",
        },

        createElement(
            "h3",
            {},
            title
        ),

        createElement(
            "p",
            {},
            value
        )
    );
}
