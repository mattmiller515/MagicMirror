import React from 'react';
import './App.css';

import { Grid } from '@material-ui/core';

import Theme from './common/Theme';

import Clock from './components/Clock';
import Weather from './components/Weather';
import Quote from './components/Quote';

function App() {
  return (
    <div className='App'>
      <Theme>
        <Grid container>
          <Grid item>
            <Clock />
          </Grid>
          <Grid item xs={true}>
            <Grid container justify='flex-end'>
              <Grid item>
                <Weather />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Quote />
      </Theme>
    </div>
  );
}

export default App;
