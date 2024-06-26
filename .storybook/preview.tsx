import React from "react";
import type {Preview} from "@storybook/react";
import {ThemeProvider} from "../src/app/lib/ThemeProvider";
import {LocalisationProvider} from "../src/app/lib/LocalisationProvider";
import '../src/app/config/i18n/settings';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators : [
    (Story) => (
        <>
          <LocalisationProvider/>
          <ThemeProvider >
            <Story />
          </ThemeProvider>
        </>
    ),
  ]
};

export default preview;
