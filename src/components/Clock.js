import React, { Component } from 'react';
import LiveClock from 'react-live-clock';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
  clock: {
    fontSize: 100
  }
};

export class Clock extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Typography variant='h3' className={classes.clock}>
        <LiveClock format={'h:mm:ss A'} ticking={true} />
      </Typography>
    );
  }
}

export default withStyles(styles)(Clock);
