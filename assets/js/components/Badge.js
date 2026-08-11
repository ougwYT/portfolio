import { createElement } from "../core/index.js";

/**
 * Cria um badge para representar tecnologias, ferramentas ou categorias.
 *
 * @param {string} text - Texto exibido no badge.
 * @param {string} [variant="default"] - Variante visual do badge.
 *
 * @returns {HTMLElement}
 */
export function createBadge(text, variant = "default") {
    return createElement(
        "span",
        {
            className: `badge badge-${variant}`,
        },
        text
    );
} 
