import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';


function Navbar() {

  return (
    <AppBar position="static" sx={{background: "#ebebeb"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display:"flex", justifyContent:"space-between"}} >

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://nahalgasht.com/wp-content/themes/nahalgasht/assets/img/logo-r.svg" />
              </IconButton>
            </Tooltip>
          </Box>

          <Typography sx={{color: "#000", cursor: "pointer"}}>کربلا</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;