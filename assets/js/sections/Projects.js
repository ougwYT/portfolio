import { createElement } from "../core/index.js";
import { createProjectCard } from "../components/index.js";
import { projects } from "../data/index.js";

export function createProjects() {
    const featuredProjects = projects.filter(
        (project) => project.featured
    );

    const otherProjects = projects.filter(
        (project) => !project.featured
    );

    const featuredGrid = createElement(
        "div",
        {
            className:
                "projects-grid projects-grid--featured",
        },

        featuredProjects.map((project) =>
            createProjectCard(project)
        )
    );

    const otherGrid = createElement(
        "div",
        {
            className:
                "projects-grid projects-grid--other",
        },

        otherProjects.map((project) =>
            createProjectCard(project)
        )
    );

    return createElement(
        "section",
        {
            className: "projects",

            attributes: {
                id: "projects",
            },
        },

        createElement(
            "div",
            {
                className: "container",
            },

            createElement(
                "header",
                {
                    className: "section-header",
                },

                createElement(
                    "h2",
                    {},
                    "Projetos"
                ),

                createElement(
                    "p",
                    {},
                    "Projetos desenvolvidos durante meus estudos e na aplicação de programação para resolver problemas reais."
                )
            ),

            createElement(
                "div",
                {
                    className: "projects-group",
                },

                createElement(
                    "h3",
                    {
                        className: "projects-group-title",
                    },
                    "Projetos em destaque"
                ),

                featuredGrid
            ),

            createElement(
                "div",
                {
                    className: "projects-group",
                },

                createElement(
                    "h3",
                    {
                        className: "projects-group-title",
                    },
                    "Outros projetos"
                ),

                otherGrid
            )
        )
    );
}
