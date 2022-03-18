import React from 'react';

import samsung from '../../assets/SAMSUNG-GALAXY-S21-Plus-5G-128GB-Phantom-Silver-SM-G996BZSDEUC-(Srebrna)-91.webp';

import { Grid } from '@material-ui/core';
import { Card, CardMedia } from '@mui/material';

import { FormattedMessage, injectIntl } from 'react-intl';

import { HomeContainer } from './styledComponents/HomeContainer';

const HomePage = () => {
  return (
    <HomeContainer container xs className="rounded-window">
      <Card style={{ height: '500px' }} variant="outlined">
        <CardMedia component="img" image={samsung} />
        Neki telefon
      </Card>
      <Card style={{ height: '500px' }} variant="outlined">
        <CardMedia component="img" image={samsung} />
        Neki telefon
      </Card>
      <Card style={{ height: '500px' }} variant="outlined">
        <CardMedia component="img" image={samsung} />
        Neki telefon
      </Card>
      <Card style={{ height: '500px' }} variant="outlined">
        <CardMedia component="img" image={samsung} />
        Neki telefon
      </Card>
      <Card style={{ height: '500px' }} variant="outlined">
        <CardMedia component="img" image={samsung} />
        Neki telefon
      </Card>
      <Card style={{ height: '500px' }} variant="outlined">
        <CardMedia component="img" image={samsung} />
        Neki telefon
      </Card>
      <Card style={{ height: '500px' }} variant="outlined">
        <CardMedia component="img" image={samsung} />
        Neki telefon
      </Card>
    </HomeContainer>
  );
};

export default injectIntl(HomePage);
