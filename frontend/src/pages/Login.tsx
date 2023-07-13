import { Box, Button, Card, Container, Stack, Typography } from '@mui/joy';
import { useState } from 'react';
import FormControl from '../components/FormControl';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log({ email, password });
  };

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      height='100vh'
    >
      <Container maxWidth='xs'>
        <Card variant='outlined' sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Typography level='h3' color='primary'>
              Login
            </Typography>
            <FormControl
              placeholder='Email Address'
              label='Email'
              name='email'
              type='email'
              value={email}
              onChange={setEmail}
            />
            <FormControl
              name='password'
              label='Password'
              placeholder='Password'
              type='password'
              value={password}
              onChange={setPassword}
            ></FormControl>
            <Button onClick={handleLogin}>Login</Button>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
};

export default Login;
