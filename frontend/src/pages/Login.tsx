import { Button, Container, Input } from '@mui/joy';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <Container>
        <h2>Login</h2>
        <Input
          name='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />

        <Input
          name='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <Button></Button>
      </Container>
    </div>
  );
};

export default Login;
