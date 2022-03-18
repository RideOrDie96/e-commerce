import React, { useState } from 'react';

import { Checkbox, List, ListItemText, ListItemButton } from '@mui/material';

import { phones } from './helpers/phones';

import { SidebarContainer } from './styledComponents/SidebarContainer';
import { Item } from './styledComponents/Item';

const Sidebar = () => {
  const [checkedPhones, setCheckedPhones] = useState([]);

  const handleChecked = (id) => () => {
    const currentIndex = checkedPhones.indexOf(id);
    const newChecked = [...checkedPhones];
    console.log(checkedPhones);
    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedPhones(newChecked);
  };

  return (
    <SidebarContainer container xs={2} className="rounded-window">
      <List>
        {phones.map((phone) => {
          const labelId = `checkbox-list-secondary-label-${phone}`;
          return (
            <Item
              onClick={handleChecked(phone)}
              key={phone}
              secondaryAction={
                <Checkbox
                  color="default"
                  className="checkbox"
                  onChange={handleChecked(phone)}
                  checked={checkedPhones.indexOf(phone) !== -1}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton className="button">
                <ListItemText id={phone} primary={phone} />
              </ListItemButton>
            </Item>
          );
        })}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
