import { createElement } from "../core/index.js";

import {
    createBadge,
    createSectionHeader,
    createTimelineItem,
} from "../components/index.js";

import { experience } from "../data/index.js";

/**
 * Cria a seção de experiência profissional.
 *
 * @returns {HTMLElement}
 */
export function createExperience() {
    const timeline = createElement(
        "div",
        {
            className: "timeline",
        },

        experience.map((item) =>
            createExperienceItem(item)
        )
    );

    return createElement(
        "section",
        {
            className: "experience",
            id: "experience",
        },

        createElement(
            "div",
            {
                className: "container",
            },

            createSectionHeader({
                title: "Experiência",
                description:
                    "Experiência profissional e aplicação de tecnologia na resolução de problemas reais.",
            }),

            timeline
        )
    );
}

/**
 * Cria um item completo de experiência profissional.
 *
 * @param {Object} experienceItem - Dados da experiência.
 *
 * @returns {HTMLElement}
 */
function createExperienceItem(experienceItem) {
    const timelineItem = createTimelineItem({
        title: experienceItem.role,
        subtitle: experienceItem.company,
        period: experienceItem.period,
        description: experienceItem.description,
    });

    const details = createElement(
        "div",
        {
            className: "experience-details",
        }
    );

    if (experienceItem.location) {
        details.append(
            createElement(
                "p",
                {
                    className: "experience-location",
                },
                experienceItem.location
            )
        );
    }

    if (experienceItem.highlights?.length) {
        details.append(
            createElement(
                "ul",
                {
                    className: "experience-highlights",
                },

                experienceItem.highlights.map((highlight) =>
                    createElement(
                        "li",
                        {},
                        highlight
                    )
                )
            )
        );
    }

    if (experienceItem.technologies?.length) {
        details.append(
            createElement(
                "div",
                {
                    className: "experience-technologies",
                },

                experienceItem.technologies.map((technology) =>
                    createBadge(technology)
                )
            )
        );
    }

    timelineItem
        .querySelector(".timeline-content")
        .append(details);

    return timelineItem;
}
