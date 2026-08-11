import { createElement } from "../core/index.js";

import {
    createBadge,
    createSectionHeader,
} from "../components/index.js";

import { skills } from "../data/index.js";

/**
 * Cria a seção de competências técnicas.
 *
 * @returns {HTMLElement}
 */
export function createSkills() {
    return createElement(
        "section",
        {
            className: "skills",
            id: "skills",
        },

        createElement(
            "div",
            {
                className: "container",
            },

            createSectionHeader({
                title: "Competências",
                description:
                    "Tecnologias, ferramentas e áreas que fazem parte da minha formação e dos projetos que desenvolvo.",
            }),

            createElement(
                "div",
                {
                    className: "skills-grid",
                },

                skills.map((skill) =>
                    createSkillCard(skill)
                )
            )
        )
    );
}

/**
 * Cria um card de categoria de competência.
 *
 * @param {Object} skill - Dados da categoria.
 * @param {string} skill.title - Nome da categoria.
 * @param {string} skill.description - Descrição da categoria.
 * @param {string[]} skill.technologies - Tecnologias relacionadas.
 *
 * @returns {HTMLElement}
 */
function createSkillCard(skill) {
    return createElement(
        "article",
        {
            className: "skill-card card",
        },

        createElement(
            "h3",
            {
                className: "skill-title",
            },
            skill.title
        ),

        createElement(
            "p",
            {
                className: "skill-description",
            },
            skill.description
        ),

        createElement(
            "div",
            {
                className: "skill-technologies",
            },

            skill.technologies.map((technology) =>
                createBadge(technology)
            )
        )
    );
}
