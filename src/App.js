import React from 'react';
import './App.css';

import { Grid } from '@material-ui/core';

import Clock from './components/Clock';
import Theme from './common/Theme';
import Weather from './components/Weather';

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
      </Theme>
    </div>
  );
}

export default App;
