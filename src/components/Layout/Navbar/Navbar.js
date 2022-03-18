import React from 'react';

import { FormattedMessage, injectIntl } from 'react-intl';

import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

import { NavbarContainer } from './styledComponents/NavbarContainer';
import { Logo } from './styledComponents/Logo';
import { Search } from './styledComponents/Search';

const Navbar = (props) => {
  return (
    <NavbarContainer className="container">
      <NavbarContainer className="content rounded-window">
        <Logo>mobileSHOP</Logo>
        <Search
          searchIcon={<SearchIcon style={{ color: '#D0D1D5' }} />}
          closeIcon={<ClearIcon style={{ color: '#D0D1D5' }} />}
          placeholder={props.intl.formatMessage({ id: 'findTheProduct' })}
          value=""
          onChange=""
          onCancelSearch=""
        />
        <p>User profile</p>
      </NavbarContainer>
    </NavbarContainer>
  );
};

export default injectIntl(Navbar);
