import { Box, Button, Card, Container, Stack, Typography } from '@mui/joy';
import { useState } from 'react';
import FormControl from '../components/FormControl';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
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
              Signup
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
            <FormControl
              name='confirmPassword'
              label='Confirm Password'
              placeholder='Confirm Password'
              type='text'
              value={confirmPassword}
              onChange={setConfirmPassword}
            ></FormControl>
            <Button onClick={handleSignup}>Signup</Button>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
};

export default Signup;
