import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Search, SearchIconWrapper, StyledInputBase } from './styles';


const PrimarySearchNavBar = (props) => {

  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar sx={{ bgcolor: 'black', borderBottom: 1}} position='static'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mx: 2, display: { xs: 'none', sm: 'block' } }}
          >
            filmify.
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              inputProps={props.value}
              className='form-control'
              value={props.value}
              onChange={(event) => props.setSearchValue(event.target.value)}
              placeholder='Type to search...'
            />
          </Search>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mx: 2 }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default PrimarySearchNavBar;