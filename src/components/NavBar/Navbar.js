import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
// import IconButton from '@material-ui/core/IconButton';
import Button from 'components/Button/index';
// import MenuIcon from '@material-ui/icons/Menu';
import { 
  // makeStyles, 
  withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import TextField from 'components/TextField/index';
// import Container from '@material-ui/core/Container';


const StyledAppBar = withStyles({
  root: {
    backgroundColor: '#F5DBCB',
    boxShadow: 'none',
    fontFamily: "'Quicksand', 'Ubuntu', sans-serif"
  },
})(AppBar);

function NavBar(props) {
  const { 
    window,
    isLoggedIn,
    showLoginModal,
    logout
  } = props;

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  console.log(window)
  const trigger = useScrollTrigger({ target: undefined });
  // const classes = useStyles();

  const [server] = useState(JSON.parse(localStorage.getItem('server')));
  console.log(server)
  const setServer = (val) => {
    localStorage.setItem('server', val);
    console.log(window)
    window.location.reload();
  }

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {/* {children} */}
      <StyledAppBar>
        <Toolbar style={{paddingTop: '1rem', paddingBottom: '1rem', color: 'initial'}} className="flex-col md:flex-row">
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <div className="flex-grow md:text-left text-left-center flex items-center">
            <h1 className="text-3xl text-red-500 font-extrabold">
              <Link to="/">dPlasma</Link>
            </h1>
            {/* <Switch checked={server} onChange={toggleServer} name="server" /> */}
            <TextField 
              select
              value={server}
              onChange={e=>setServer(e.target.value)}
            >
              <MenuItem key="1" value={1}><p className="font-tema text-red-500 text-sm font-bold">Monolith</p></MenuItem>
              <MenuItem key="2" value={2}><p className="font-tema text-red-500 text-sm font-bold">Hybrid</p></MenuItem>
              <MenuItem key="3" value={3}><p className="font-tema text-red-500 text-sm font-bold">Serverless</p></MenuItem>
            </TextField>
          </div>
          {isLoggedIn ? 
            <div className="flex items-center">
              <Link to="/request"><Button><AddIcon />&nbsp;Request Donor</Button></Link>
              <Link to="/"><MenuItem button><span className="font-tema">Donor</span></MenuItem></Link>
              <Link to="/profile"><MenuItem button><span className="font-tema">Profil</span></MenuItem></Link>
              <MenuItem button onClick={logout}><span className="font-tema">Logout</span></MenuItem>
            </div>
            : 
            <div className="flex items-center">
              <Button onClick={showLoginModal}><AddIcon />&nbsp;Request Donor</Button>
              <Link to="/"><MenuItem button><span className="font-tema">Donor</span></MenuItem></Link>
              <MenuItem button onClick={showLoginModal}><span className="font-tema">Login</span></MenuItem>
              {/* <Button onClick={showLoginModal}>Login</Button> */}
            </div>
          }
        </Toolbar>
      </StyledAppBar>
    </Slide>
  );
}

NavBar.propTypes = {
  // children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;