import { Box, Button, Typography } from '@mui/joy';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Box sx={{ display: 'flex', margin: 1 }}>
        <Typography component='div' sx={{ flexGrow: 1 }}>
          Logo
        </Typography>

        <Link to='/login'>
          <Button variant='outlined'>Login</Button>
        </Link>

        <Link to='/signup'>
          <Button>Signup</Button>
        </Link>
      </Box>
    </div>
  );
};

export default Header;
