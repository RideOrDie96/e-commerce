import React from 'react';
import { Route } from 'react-router';

import { routes } from './Routes/helpers/routes';

import Navbar from './Navbar/Navbar';
import Routes from './Routes/Routes';

import { LayoutContainer } from './styledComponents/LayoutContainer';
import { Body } from './styledComponents/Body';
import './styledComponents/style.css';
import Sidebar from './Sidebar/Sidebar';

const Layout = (props) => {
  return (
    <LayoutContainer>
      <Navbar />
      <Body container>
        <Sidebar />
        <Routes />
      </Body>
    </LayoutContainer>
  );
};

export default Layout;
