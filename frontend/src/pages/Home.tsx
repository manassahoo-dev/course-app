import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { CssBaseline, CssVarsProvider } from '@mui/joy';
const Home = () => {
  const location = useLocation();
  const hideHeader =
    location.pathname === '/login' || location.pathname === '/signup';

  return (
    <CssVarsProvider>
      {/* must be used under CssVarsProvider */}
      <CssBaseline />

      {!hideHeader && <Header />}
      <Outlet />
      {/* The rest of your application */}
    </CssVarsProvider>
  );
};

export default Home;
