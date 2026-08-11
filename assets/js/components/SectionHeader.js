import { createElement } from "../core/index.js";

/**
 * Cria o cabeçalho padrão utilizado nas seções da página.
 *
 * @param {Object} options - Configurações do cabeçalho.
 * @param {string} options.title - Título da seção.
 * @param {string} [options.description=""] - Descrição da seção.
 *
 * @returns {HTMLElement}
 */
export function createSectionHeader({
    title,
    description = "",
}) {
    const children = [
        createElement("h2", {}, title),
    ];

    if (description) {
        children.push(
            createElement("p", {}, description)
        );
    }

    return createElement(
        "header",
        {
            className: "section-header",
        },
        children
    );
}
