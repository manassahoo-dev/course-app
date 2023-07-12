import { Box, Typography } from '@mui/joy';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Typography component='div' sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </Box>
    </div>
  );
};

export default Header;
