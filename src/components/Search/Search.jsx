import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import "./Search.css";

function SearchBar() {
  return (
    <div className="search-container">
      <InputBase
        className="input-base"
        placeholder="Search an album of your choice"
        inputProps={{
          'aria-label': 'search',
          style: { fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: 'rgba(0, 0, 0, 0.7)' },
        }}
      />
      <div className="search-icon-wrapper">
        <SearchIcon />
      </div>
    </div>
  );
}
export default SearchBar;



// // Using Inline Css in JS
// import SearchIcon from '@mui/icons-material/Search';
// import { styled, alpha } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import "./Search.css";

// function SearchBar() {
//   const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: 'white', // Use green background
//     borderRadius: '8px',
//     border: '1px solid #121212', // Black border to match image
//     width: '100%',
//     marginLeft: '30px',
//     maxWidth: '568px', // Set a max width to limit the size
//     height: '48px',
//     [theme.breakpoints.down('md')]: { // Apply for tablets and below
//       marginLeft: '0px',
//     },
//   }));

//   const SearchIconWrapper = styled('div')({
//     width: '67px',
//     height: '48px',
//     border: '1px solid #121212', 
//     borderTopRightRadius: '8px', 
//     borderBottomRightRadius: '8px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'black',
//     cursor: 'Pointer',
//   });


// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     fontSize: '16px',
//     paddingLeft: '0px', 
//     width: '100%', 
//     '& .MuiInputBase-input': {
//       padding: '10px 16px', 
//       [theme.breakpoints.down('sm')]: { 
//         width: '100%', 
//       },
//     },
//   }));
  

//   return (
//     <Search>
//       <StyledInputBase
//         placeholder="Search an album of your choice"
//         inputProps={{ 'aria-label': 'search' }}
//       />
//       <SearchIconWrapper>
//         <SearchIcon />
//       </SearchIconWrapper>
//     </Search>
//   );
// }

// export default SearchBar;