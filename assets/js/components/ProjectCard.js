import { createElement } from "../core/index.js";

import { createBadge } from "./Badge.js";
import { createButton } from "./Button.js";
import { createMetric } from "./Metric.js";

/**
 * Cria um card para apresentação de um projeto.
 *
 * @param {Object} project - Dados do projeto.
 * @param {string} project.title - Nome do projeto.
 * @param {string} project.description - Descrição do projeto.
 * @param {string[]} project.technologies - Tecnologias utilizadas.
 * @param {Object[]} [project.metrics=[]] - Métricas do projeto.
 * @param {string|null} [project.github=null] - URL do repositório.
 * @param {string|null} [project.demo=null] - URL da demonstração.
 *
 * @returns {HTMLElement}
 */
export function createProjectCard(project) {
    const technologies = createElement(
        "div",
        {
            className: "project-technologies",
        },
        project.technologies.map((technology) =>
            createBadge(technology)
        )
    );

    const content = createElement(
        "div",
        {
            className: "project-content",
        },

        createElement(
            "h3",
            {
                className: "project-title",
            },
            project.title
        ),

        createElement(
            "p",
            {
                className: "project-description",
            },
            project.description
        ),

        technologies
    );

    const card = createElement(
        "article",
        {
            className: "project-card card",
        },

        content
    );

    /*
     * Métricas
     *
     * Só cria o bloco quando o projeto
     * realmente possuir métricas.
     */
    if (project.metrics?.length) {
        const metrics = createElement(
            "div",
            {
                className: "project-metrics",
            },

            project.metrics.map((metric) =>
                createMetric(
                    metric.value,
                    metric.label
                )
            )
        );

        card.append(metrics);
    }

    /*
     * Ações
     */
    const actions = createElement(
        "div",
        {
            className: "project-actions",
        }
    );

    if (project.github) {
        actions.append(
            createButton({
                text: "GitHub",
                href: project.github,
                external: true,
            })
        );
    }

    if (project.demo) {
        actions.append(
            createButton({
                text: "Ver projeto",
                href: project.demo,
                variant: "outline",
                external: true,
            })
        );
    }

    /*
     * Só adiciona a área de ações
     * caso exista algum link.
     */
    if (project.github || project.demo) {
        card.append(actions);
    }

    return card;
}
