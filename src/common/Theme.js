import React from 'react';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {}
});

const Theme = props => {
  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};

export default Theme;
