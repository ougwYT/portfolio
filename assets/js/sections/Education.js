import { createElement } from "../core/index.js";

import {
    createSectionHeader,
    createTimelineItem,
} from "../components/index.js";

import { education } from "../data/index.js";

/**
 * Cria a seção de formação acadêmica.
 *
 * @returns {HTMLElement}
 */
export function createEducation() {
    const timeline = createElement(
        "div",
        {
            className: "timeline education-timeline",
        },

        education.map((item) =>
            createEducationItem(item)
        )
    );

    return createElement(
        "section",
        {
            className: "education",
            id: "education",
        },

        createElement(
            "div",
            {
                className: "container",
            },

            createSectionHeader({
                title: "Formação",
                description:
                    "Minha formação acadêmica e trajetória de aprendizado.",
            }),

            timeline
        )
    );
}

/**
 * Cria um item da formação acadêmica.
 *
 * @param {Object} educationItem - Dados da formação.
 *
 * @returns {HTMLElement}
 */
function createEducationItem(educationItem) {
    const timelineItem = createTimelineItem({
        title: educationItem.course,
        subtitle: `${educationItem.institution} — ${educationItem.abbreviation}`,
        period: educationItem.period,
        description: educationItem.description,
    });

    const details = createElement(
        "div",
        {
            className: "education-details",
        }
    );

    if (educationItem.status) {
        details.append(
            createElement(
                "span",
                {
                    className: "education-status",
                },
                educationItem.status
            )
        );
    }

    if (educationItem.location) {
        details.append(
            createElement(
                "p",
                {
                    className: "education-location",
                },
                educationItem.location
            )
        );
    }

    if (educationItem.highlights?.length) {
        details.append(
            createElement(
                "ul",
                {
                    className: "education-highlights",
                },

                educationItem.highlights.map((highlight) =>
                    createElement(
                        "li",
                        {},
                        highlight
                    )
                )
            )
        );
    }

    timelineItem
        .querySelector(".timeline-content")
        .append(details);

    return timelineItem;
}
