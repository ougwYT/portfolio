const STORAGE_KEY = "portfolio-theme";

const THEMES = {
    LIGHT: "light",
    DARK: "dark",
};

/**
 * Retorna o tema salvo pelo usuário.
 *
 * @returns {string|null}
 */
function getSavedTheme() {
    return localStorage.getItem(STORAGE_KEY);
}


/**
 * Verifica a preferência de tema do sistema operacional.
 *
 * @returns {boolean}
 */
function prefersDarkTheme() {
    return window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
}


/**
 * Define o tema atual da aplicação.
 *
 * @param {"light"|"dark"} theme
 */
function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;

    localStorage.setItem(
        STORAGE_KEY,
        theme
    );

    updateThemeButton(theme);
}


/**
 * Atualiza o ícone e a descrição do botão.
 *
 * @param {"light"|"dark"} theme
 */
function updateThemeButton(theme) {
    const button =
        document.querySelector(".theme-toggle");

    if (!button) {
        return;
    }

    const isDark = theme === THEMES.DARK;

    button.textContent = isDark
        ? "☀️"
        : "🌙";

    button.setAttribute(
        "aria-label",
        isDark
            ? "Ativar tema claro"
            : "Ativar tema escuro"
    );
}


/**
 * Alterna entre os temas claro e escuro.
 */
function toggleTheme() {
    const currentTheme =
        document.documentElement.dataset.theme;

    const nextTheme =
        currentTheme === THEMES.DARK
            ? THEMES.LIGHT
            : THEMES.DARK;

    applyTheme(nextTheme);
}


/**
 * Inicializa o sistema de temas.
 */
export function initTheme() {
    const savedTheme = getSavedTheme();

    const initialTheme =
        savedTheme ??
        (
            prefersDarkTheme()
                ? THEMES.DARK
                : THEMES.LIGHT
        );

    applyTheme(initialTheme);

    const button =
        document.querySelector(".theme-toggle");

    button?.addEventListener(
        "click",
        toggleTheme
    );
}
