import { createElement } from "../core/index.js";

/**
 * Cria um botão baseado em link.
 *
 * @param {Object} options - Configurações do botão.
 * @param {string} options.text - Texto exibido.
 * @param {string} options.href - Destino do link.
 * @param {string} [options.variant="primary"] - Variante visual.
 * @param {boolean} [options.external=false] - Define se o link é externo.
 * @param {string|false} [options.download=false] - Nome do arquivo para download.
 *
 * @returns {HTMLElement}
 */
export function createButton({
    text,
    href,
    variant = "primary",
    external = false,
    download = false,
}) {
    const attributes = {
        href,
    };

    if (external) {
        attributes.target = "_blank";
        attributes.rel = "noopener noreferrer";
    }

    if (download) {
        attributes.download = download;
    }

    return createElement(
        "a",
        {
            className: `btn btn-${variant}`,
            attributes,
        },
        text
    );
}
