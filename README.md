<h1 align="center">
  <a target="_blank" href="https://finki-ui.netlify.app/">
    <img src="https://www.finki.ukim.mk/Content/dataImages/downloads/logo-large-500x500_2.png" alt="finki-ui" title="FINKI UI" width="300">
    <br />
    <span style="font-size: 1.5rem; color: blue">FINKI React UI Components</span>
  </a>
</h1>
<p align="center" style="font-size: 1.2rem;">Modern React UI library. Code less, do more.</p>

[![Version][version-badge]][package]
[![MIT License][license-badge]][license]

```sh
yarn add finki-ui styled-components
```

FINKI UI is a style system / UI library for [React](https://reactjs.org/). It works with [Styled Components 💅](https://www.styled-components.com).

## Up & Running

To install dependencies with Yarn, run:

```sh
$ yarn install
```

or to install with npm, run:

```sh
$ npm install
```

## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { ThemeWrapper, Button } from "finki-ui";

function App() {
  return (
    <ThemeWrapper withProvider={ThemeProvider}>
      <Button size="lg">
        Hello World
      </Button>
    <ThemeWrapper/>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

Yes, it's really all you need to get started.

### Modifiers

This library utilizes
[`styled-components-modifiers`](https://github.com/Decisiv/styled-components-modifiers) to build
modifiers. Modifiers are small functions that allow us to alter the properties of an Element.
They primarily live in the Element's file and are solely responsible for modifying styles.
Some modifiers are common to multiple Elements. An example would be `fontWeights`.
These common modifiers live in `src/modifiers`

### Linting

\_**NOTE:** The linter will run against everything in the `src` directory.

### JavaScript Linting

To run the linter once:

```
$ yarn lint:js
```

To run the watch task:

```
$ yarn lint:js:watch
```

#### Style Linting

To run the style linter:

```
$ yarn lint:style
```

#### Linting JavaScript & Styles

To run both linters:

```
$ yarn lint
```

### Review

If you'd like to run the linters and tests at once (this is a nice check before pushing to
Github or deploys), you can run:

```
$ yarn review
```

### Build

\_**NOTE:** When you run `build`, Babel will create a `build` directory.

Run once:

```
$ npm/yarn run build
```

Run the watch script:

```
$ npm/yarn run build:watch
```

_**NOTE:** the build script runs in the `prepublishOnly` script just before you publish to npm._

## Contributing

We are thankful for any contributions made by the community. By contributing you agree to abide by
the Code of Conduct in the [Contributing Guidelines](https://github.com/mustran/finki-thesis-react-ui-library/blob/master/.github/CONTRIBUTING.md).

## License

Licensed under the MIT License, Copyright © 2020-present Musli Ademi.

See [LICENSE](https://github.com/mustran/finki-thesis-react-ui-library/blob/master/LICENCE) for more information.

[version-badge]: https://img.shields.io/badge/npm-v1.0.3-blue
[package]: https://www.npmjs.com/package/finki-ui
[license-badge]: https://img.shields.io/badge/licence-MIT-green
[license]: https://github.com/mustran/finki-thesis-react-ui-library/blob/master/LICENCE
