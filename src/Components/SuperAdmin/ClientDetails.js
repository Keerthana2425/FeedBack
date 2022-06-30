import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
// import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer() {
  const [rightstate, setRightState] = React.useState(
    false,
  );

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setRightState(open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      helooo

      <Divider />

      hiiiii
    </Box>
  );
  const right = 'right';

  return (
    <div>
      <React.Fragment key={right}>
        <Button onClick={toggleDrawer(right, true)}>{right}</Button>
        <Drawer
          anchor={right}
          open={rightstate}
          onClose={toggleDrawer(false)}
        >
          {list(right)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
