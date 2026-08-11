import { createElement } from "../core/index.js";

/**
 * Cria um item reutilizável de timeline.
 *
 * Pode representar experiências profissionais,
 * formação acadêmica ou outros eventos cronológicos.
 *
 * @param {Object} options - Dados do item.
 * @param {string} options.title - Título principal.
 * @param {string} options.subtitle - Informação complementar.
 * @param {string} options.period - Período do item.
 * @param {string} [options.description=""] - Descrição opcional.
 *
 * @returns {HTMLElement}
 */
export function createTimelineItem({
    title,
    subtitle,
    period,
    description = "",
}) {
    const content = createElement(
        "div",
        {
            className: "timeline-content",
        },
        createElement(
            "span",
            {
                className: "timeline-period",
            },
            period
        ),
        createElement(
            "h3",
            {
                className: "timeline-title",
            },
            title
        ),
        createElement(
            "p",
            {
                className: "timeline-subtitle",
            },
            subtitle
        )
    );

    if (description) {
        content.append(
            createElement(
                "p",
                {
                    className: "timeline-description",
                },
                description
            )
        );
    }

    return createElement(
        "article",
        {
            className: "timeline-item",
        },
        createElement("div", {
            className: "timeline-marker",
            attributes: {
                "aria-hidden": "true",
            },
        }),
        content
    );
}
