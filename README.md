# Guestfriend FE dev test

This is a simple web app project in [React.js](https://reactjs.org/)
bootstrapped
with [Create React App](https://github.com/facebook/create-react-app),
using [Redux](https://redux.js.org/)
and [Redux Toolkit](https://redux-toolkit.js.org/).

[react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) was
used for drag and drop.

[react-i18next](https://github.com/i18next/react-i18next) was
used for i18n.

Code is deployed to GitHub https://github.com/bojan-radicevic/guestfriend-test.

## Technical spec

[Node.js](https://nodejs.org/) version used `v18.17.1`

[Yarn](https://yarnpkg.com/) version used `1.22.21`

## Getting Started DEV

First, install `node_modules`:

```bash
yarn
```

Then, start the React development server:

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser
to see the result.

## Getting Started PROD

First, install `node_modules`:

```bash
yarn
```

Then, build project:

```bash
yarn build
```

And finally, start the Express server:

```bash
yarn start
```

## Styling

[styled-components](https://styled-components.com/) were used for styling.

## Testing

Tests are written
with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
with [Jest](https://jestjs.io/) as test runner

```bash
yarn test
```

## Clean Code

Keep code
clean with [ESlint](https://eslint.org/) and [Prettier](https://prettier.io/).

To format code on demand with Prettier:

```bash
yarn run format
```

To format code on demand with ESlint:

```bash
yarn run lint
```

[Husky](https://typicode.github.io/husky/) is doing both on every git commit.

## Useful Links

To learn more about technologies used, take a look at the following resources:

- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux.js Documentation](https://redux.js.org/introduction/getting-started)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started)
- [React Router Documentation](https://reactrouterdotcom.fly.dev/docs/en/v6)
- [Husky Documentation](https://typicode.github.io/husky/)
- [styled-components Documentation](https://styled-components.com/docs)
- [react-beautiful-dnd Documentation](https://github.com/atlassian/react-beautiful-dnd)
- [react-i18next Documentation](https://react.i18next.com/)
- [React Testing Library Documentation](https://testing-library.com/docs/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
