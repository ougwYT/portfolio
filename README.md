# 👨‍💻 Portfólio — Miguel Ferreira Sena

Portfólio pessoal desenvolvido para apresentar minha trajetória, competências, experiência profissional e projetos na área de tecnologia.

🌐 **Portfólio online:**
https://ougwYT.github.io/portfolio/

---

## 👋 Sobre o projeto

Este portfólio foi desenvolvido como uma aplicação web modular utilizando HTML, CSS e JavaScript.

Além de apresentar meus projetos e experiências, o desenvolvimento deste site também serviu como exercício de organização de código, componentização e separação de responsabilidades no frontend.

A interface é construída dinamicamente através de componentes JavaScript reutilizáveis, enquanto os dados do portfólio são mantidos separados da lógica de apresentação.

---

## 🚀 Tecnologias

### Frontend

- HTML5
- CSS3
- JavaScript
- ES Modules

### Ferramentas

- Git
- GitHub
- GitHub Pages
- VS Code

---

## 🧩 Arquitetura

O JavaScript foi organizado em módulos com responsabilidades distintas:

```text
assets/js/
├── app.js
│
├── components/
│   ├── Badge.js
│   ├── Button.js
│   ├── Metric.js
│   ├── ProjectCard.js
│   ├── SectionHeader.js
│   ├── TimelineItem.js
│   └── index.js
│
├── core/
│   ├── createElement.js
│   ├── menu.js
│   ├── theme.js
│   └── index.js
│
├── data/
│   ├── education.js
│   ├── experience.js
│   ├── profile.js
│   ├── projects.js
│   ├── skills.js
│   └── index.js
│
└── sections/
    ├── About.js
    ├── Contact.js
    ├── Education.js
    ├── Experience.js
    ├── Footer.js
    ├── Hero.js
    ├── Navbar.js
    ├── Projects.js
    ├── Skills.js
    └── index.js
```

Essa estrutura separa:

- **core** — funcionalidades fundamentais da aplicação;
- **components** — elementos reutilizáveis da interface;
- **data** — informações utilizadas para montar o portfólio;
- **sections** — grandes seções da página;
- **app.js** — composição e inicialização da aplicação.

---

## ✨ Funcionalidades

- Interface responsiva
- Tema claro e escuro
- Menu adaptado para dispositivos móveis
- Navegação entre seções
- Componentes JavaScript reutilizáveis
- Projetos renderizados dinamicamente
- Dados separados da camada de apresentação
- Links para GitHub e LinkedIn
- Download do currículo em PDF
- Layout adaptado para desktop, tablet e dispositivos móveis

---

## 📂 Seções

O portfólio apresenta:

- Sobre mim
- Competências
- Projetos
- Experiência profissional
- Formação acadêmica
- Contato

---

## 💼 Projetos

Entre os projetos apresentados estão aplicações envolvendo:

- Python
- automação de processos;
- processamento de dados;
- manipulação de imagens e documentos;
- desenvolvimento web;
- interfaces com JavaScript.

Um dos principais projetos apresentados é o **Gerador Automatizado de Catálogos**, desenvolvido em Python para processar dados de produtos, imagens e gerar catálogos comerciais.

---

## 🌐 Deploy

O projeto é publicado utilizando **GitHub Pages**.

A versão atual pode ser acessada em:

👉 https://ougwYT.github.io/portfolio/

---

## 📬 Contato

**Miguel Ferreira Sena**

- GitHub: https://github.com/ougwYT
- LinkedIn: https://www.linkedin.com/in/miguel-ferreira-sena-likedin/
- E-mail: spinolasena2006@gmail.com

---

## 📄 Licença

Este projeto está disponibilizado sob a licença presente no arquivo [LICENSE](LICENSE).
