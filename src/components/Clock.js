import React, { Component } from 'react';
import LiveClock from 'react-live-clock';

import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
  clock: {
    fontSize: 200
  },
  seconds: {
    fontsize: 50,
    marginBottom: 20
  }
};

export class Clock extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Grid container alignItems='flex-end'>
          <Grid item>
            <Typography variant='h3' className={classes.clock}>
              <LiveClock format={'h:mm'} ticking={true} />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h3' className={classes.seconds}>
              <LiveClock format={'ss'} ticking={true} />
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>

    );
  }
}

export default withStyles(styles)(Clock);
