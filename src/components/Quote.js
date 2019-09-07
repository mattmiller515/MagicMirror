import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
    container: {
        position: 'absolute',
        bottom: 0,
        margin: 50
    },
    author: {
        marginTop: 20,
        marginLeft: 50
    }
}

export class Quote extends Component {

    render() {
        const { classes, quote } = this.props;

        return (
            <Grid container alignItems='flex-end' className={classes.container}>
                <Grid item>
                    <Typography variant='h4' align='left'>
                        <i>"{quote.text}"</i>

                    </Typography>
                    <Typography variant='h5' align='left' className={classes.author}>- {quote.author}</Typography>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    quote: state.quote
});

export default connect(mapStateToProps)(withStyles(styles)(Quote));
