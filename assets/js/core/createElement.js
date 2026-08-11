/**
 * Cria um elemento HTML e configura suas propriedades.
 *
 * @param {string} tag - Nome da tag HTML.
 * @param {Object} [options={}] - Configurações do elemento.
 * @param {string} [options.className] - Classes CSS.
 * @param {string} [options.id] - ID do elemento.
 * @param {Object} [options.attributes] - Atributos HTML.
 * @param {Object} [options.dataset] - Atributos data-*.
 * @param {Object} [options.events] - Event listeners.
 * @param {...(Node|string|number|Array|null|undefined|false)} children
 * Elementos filhos.
 *
 * @returns {HTMLElement}
 */
export function createElement(tag, options = {}, ...children) {
    const {
        className = "",
        id = "",
        attributes = {},
        dataset = {},
        events = {},
    } = options;

    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (id) {
        element.id = id;
    }

    Object.entries(attributes).forEach(([name, value]) => {
        if (value !== null && value !== undefined) {
            element.setAttribute(name, String(value));
        }
    });

    Object.entries(dataset).forEach(([name, value]) => {
        if (value !== null && value !== undefined) {
            element.dataset[name] = String(value);
        }
    });

    Object.entries(events).forEach(([eventName, handler]) => {
        if (typeof handler === "function") {
            element.addEventListener(eventName, handler);
        }
    });

    children
        .flat(Infinity)
        .forEach((child) => {
            if (
                child === null ||
                child === undefined ||
                child === false
            ) {
                return;
            }

            if (
                typeof child === "string" ||
                typeof child === "number"
            ) {
                element.append(
                    document.createTextNode(String(child))
                );

                return;
            }

            element.append(child);
        });

    return element;
}
