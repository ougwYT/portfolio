import {
    initMenu,
    initTheme,
} from "./core/index.js";

import {
    createNavbar,
    createHero,
    createAbout,
    createSkills,
    createProjects,
    createExperience,
    createEducation,
    createContact,
    createFooter,
} from "./sections/index.js";

const app = document.querySelector("#app");

if (!app) {
    throw new Error(
        'Elemento raiz "#app" não encontrado.'
    );
}

app.append(
    createNavbar(),
    createHero(),
    createAbout(),
    createSkills(),
    createProjects(),
    createExperience(),
    createEducation(),
    createContact(),
    createFooter()
);

initTheme();
initMenu();
