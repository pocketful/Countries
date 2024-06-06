# Countries

Web app that lets users browse countries from the [Rest Countries API](https://restcountries.com).

# 🎨 Main features

- Display countries list fetched from API
- Sort by name
- Filter countries:
  - That are smaller than Lithuania by area
  - That are in 'Oceania' region

# 🔧 Technologies used

- JavaScript library: [React](https://reactjs.org/)
- TypeScript support: [TypeScript](https://www.typescriptlang.org/)
- Testing: [Jest](https://jestjs.io/) / [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) / [Jest-DOM](https://testing-library.com/docs/ecosystem-jest-dom/) / [User Event](https://testing-library.com/docs/user-event/intro/) / [MSW](https://mswjs.io/)
- Styling: [CSS Modules](https://github.com/css-modules/css-modules/) with [SASS](https://sass-lang.com/)
- Code linting: [ESLint](https://eslint.org/)
- Code formatter: [Prettier](https://prettier.io/)
- Style linting: [Stylelint](https://stylelint.io/)
- Pre-commit hook for formatting and linting: [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged/)
- Build tool: [Vite](https://vitejs.dev/)
- Package manager: [pnpm](https://pnpm.io/)

# 🚀 Getting started

[![Node.js Version](https://img.shields.io/badge/node-v20.11.1-339933?logo=nodedotjs)](https://nodejs.org/)
[![pnpm Version](https://img.shields.io/badge/pnpm-v9.2.0-F69220?logo=pnpm)](https://www.npmjs.com/package/pnpm/v/9.2.0)

### 🔨 Configure files

Rename `.env.example` to `.env` and put your API environment variables in it

```bash
mv .env.example .env
```

### 🎈 Start the project

```bash
# If you want to create a Git repository and use Git hooks
git init

# Install dependencies
pnpm i

# Run in the development mode
pnpm dev

# To make the development server accessible on a different device, run
pnpm start

```

### 🆚 VS Code integration

To enable all app development features, you will need the following VS Code extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

[🔼 Back To Top](#top)