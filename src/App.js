import React, { useState } from 'react';
import NameInput from './components/NameInput';
import EmailInput from './components/EmailInput';
import PasswordInput from './components/PasswordInput';
import RememberMeCheckbox from './components/RememberMeCheckbox';
import RegisterButton from './components/RegisterButton';
import GoogleOAuthButton from './components/GoogleOAuthButton';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleRegister = () => {
    // Handle registration logic here
  };

  return (
    <div className="App">
      <h1>Ruix Sign-Up</h1>
      <form>
        <NameInput value={name} onChange={(e) => setName(e.target.value)} />
        <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
        <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
        <RememberMeCheckbox
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <RegisterButton onClick={handleRegister} />
        <GoogleOAuthButton />
      </form>
    </div>
  );
}

export default App;