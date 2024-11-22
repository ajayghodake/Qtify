// import React from "react";
import logo from "../../assets/qtifyLogo.svg";
import "./navbar.css";
import Btn from "../Button/Button";
import SearchBar from "../Search/Search";
import Hero from "../Hero/Hero";
import ActionAreaCard from "../Card/Card";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <SearchBar />
        <Btn className="navbar-btn" btnLable="Give Feedback" />
      </div>
      <div>
        <Hero />
      </div>
      <ActionAreaCard />
    </>
  );
}

export default Navbar;

// import React from 'react';
// import { AppBar, Toolbar, Typography, InputBase, Button } from '@mui/material';
// import { makeStyles, alpha } from '@mui/material/styles';
// import SearchIcon from '@mui/icons-material/Search';

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     backgroundColor: '#3f51b5',
//   },
//   logo: {
//     display: 'flex',
//     alignItems: 'center',
//     marginRight: theme.spacing(2),
//     cursor: 'pointer',
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
//   button: {
//     marginLeft: 'auto',
//   },
// }));

// const Navbar = () => {
//   const classes = useStyles();

//   return (
//     <AppBar position="static" className={classes.appBar}>
//       <Toolbar>
//         {/* Logo */}
//         <Typography variant="h6" className={classes.logo}>
//           Logo
//         </Typography>

//         {/* Search Bar */}
//         <div className={classes.search}>
//           <div className={classes.searchIcon}>
//             <SearchIcon />
//           </div>
//           <InputBase
//             placeholder="Search…"
//             classes={{
//               root: classes.inputRoot,
//               input: classes.inputInput,
//             }}
//             inputProps={{ 'aria-label': 'search' }}
//           />
//         </div>

//         {/* Button */}
//         <Button variant="contained" color="secondary" className={classes.button}>
//           Login
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
