import React, { Component } from 'react';
import LiveClock from 'react-live-clock';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {};

export class Clock extends Component {
  render() {
    return (
      <Typography variant='h1'>
        <LiveClock format={'HH:mm:ss'} ticking={true} />
      </Typography>
    );
  }
}

export default withStyles(styles)(Clock);
