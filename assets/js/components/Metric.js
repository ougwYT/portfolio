import { createElement } from "../core/index.js";

/**
 * Cria uma métrica utilizada para destacar informações numéricas
 * ou resultados de um projeto.
 *
 * @param {string|number} value - Valor principal da métrica.
 * @param {string} label - Descrição da métrica.
 *
 * @returns {HTMLElement}
 */
export function createMetric(value, label) {
    return createElement(
        "div",
        {
            className: "metric",
        },
        createElement(
            "strong",
            {
                className: "metric-value",
            },
            value
        ),
        createElement(
            "span",
            {
                className: "metric-label",
            },
            label
        )
    );
}
