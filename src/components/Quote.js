import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { retrieveQuote } from '../actions/quoteActions';

const styles = {
    container: {
        position: 'absolute',
        bottom: 0,
        padding: 100
    },
    marginTop: {
        marginTop: 20
    }
}

export class Quote extends Component {

    componentDidMount() {
        this.props.retrieveQuote();
    }

    render() {
        const { classes, quote } = this.props;

        return (
            <Grid container alignItems='flex-end' className={classes.container}>
                <Grid item>
                    <Typography variant='h4' align='left'>
                        <i>"{quote.text}"</i>
                    </Typography>
                    <Typography variant='h5' className={classes.marginTop}>- {quote.author}</Typography>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    quote: state.quote
});

const mapDispatchToProps = dispatch => ({
    retrieveQuote: () => dispatch(retrieveQuote()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Quote));
