# UoL - BsC Computer Science - Documentation  

![Banner para sites e documentos empresarial moderno roxo e branco](https://github.com/my-uol/uol-cs-docs/assets/83146584/af5190e1-1292-40d7-aa78-8faa1608ce2b)


[![Netlify Status](https://api.netlify.com/api/v1/badges/d14c50b9-c5ce-4121-b8a6-a57a49cbcde0/deploy-status)](https://app.netlify.com/sites/uol-cs-docs/deploys)

## Welcome to the unofficial UoL's CS Degree Documentation! 👋

This is an open-source project to provide useful information for people who are interested in the programme. It's a full documentation with how-to, useful information, tricks and more.

The main goal is to help people who are new, but hopefully this will be used as a guide for every student independent of their progress on the programme.

## Lend us a hand and contribute

You are more than free to contribute, here is what you can do:

- Correct grammar/typos errors
- Translate the documentation to your language.
- Update references, links, data, values and etc to up to date.

## How to contribute

The gitflow we're working is:

### Branches

- **main**: Main branch lol (the final code ready for deployment)
- **develop**: Where all PRs should be sent, very unique commits should be done here (quick fix, typos etc)
- **username_My-Language**: Translation branches for individual work.
- **username_issueNumber**: Individual branch for solving issues.

### Helping with translation

### TO-DO

- [ ] Translate all documentation
- [ ] Translate navbar, sidebar, and other components
- [ ] Translate links, resources and other useful informations

### Language Requisites

- Desired language proficiency
- Follow grammar rules

### How to translate

#### Site configuration[​](https://docusaurus.io/docs/i18n/tutorial#site-configuration "Direct link to Site configuration")

Use the  [site i18n configuration](https://docusaurus.io/docs/api/docusaurus-config#i18n)  to declare the i18n locales:
You can check here the i18n codes: [i18n lang codes](https://www.w3.org/International/O-charset-lang.html)

`docusaurus.config.js`

```js
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br'],
  },
```

 1. Create a new branch with the convention `yourusername_langcode` (e.x: `per-sa_PT-BR`)
 2. Setup your directory just like this: On the folder **i18n**, create a folder with the i18n Language Code (e.x FR, PT-BR), create a new folder called `docusaurus-plugin-content-docs`, create a new folder called `current` and copy all files from the `docs` folder to the `current` folder:

 ```markdown
├── i18n
│   ├── i18n language code
│   │   ├── docusaurus-plugin-content-docs
│   │   │   ├── current
│   │   │   │   ├── docs content
```

![Image](https://github.com/my-uol/uol-cs-docs/assets/83146584/1f65668a-a0c0-4770-9a31-f765e5f5dd7c)

Make sure to always sync your branch with `develop`, commit significant changes and after you're done, create a **PR** (Pull Request) to `develop`.

You can only develop one language per environment, so make sure to run the following command:

```bash
npm run start -- --locale fr
````

## Installation

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

Clone the project

```bash
$  git  clone  https://github.com/my-uol/uol-cs-docs.git
```

Go to the directory

```bash
$  cd  uol-cs-docs/
```

Install dependencies

```bash
$  npm  i
```

### Local Development

```bash
$  npm  start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
$  npm  build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
