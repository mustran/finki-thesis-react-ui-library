import React from 'react';
import { create } from '@storybook/theming';
import { withInfo } from '@storybook/addon-info';
import { addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { ThemeProvider } from 'styled-components';
import { version } from '../package.json';
import { Theme } from '../src/theme/theme';

// Storybook theme
const storybookTheme = create({
  base: 'light',
  // brand
  brandTitle: `FINKI UI ${version}`,
  brandUrl: 'https://github.com/mustran/finki-thesis-react-ui-library',
  brandImage: 'https://www.finki.ukim.mk/Content/dataImages/downloads/logo-large-500x500_2.png',
});

// Parameters
addParameters({
  options: {
    theme: storybookTheme,
    showPanel: false,
    isFullscreen: false,
    storySort: undefined,
    isToolshown: true,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

// Decorators
addDecorator(withInfo);
addDecorator((storyFn) => <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>);
