import type { User } from 'firebase/auth';
import React, { useState } from 'react';
import CardContainer from './components/CardContainer';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

const App = () =>  {
  
  const user = JSON.parse(localStorage.getItem('user') ?? '{}') ?? null
  console.log(user);

  const [state, setState] = useState<{
    token: string | null;
    user: User | null;
    isLogged: boolean;
  }>({
    token: localStorage.getItem('token') ?? null,
    user: user,
    isLogged: !!user,
  })

  const setAuth = ({ token, user }: { token: string | null, user: User | null}) => {
    setState({
      token,
      user,
      isLogged: !!user,
    })
    
    
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(user));
  }

  return (
    <div className="App">
      {
        state.isLogged ? 
        <div>
          <img src={state?.user?.photoURL ?? ''} alt='profile'></img>
          <div>user: {state?.user?.displayName}</div>
          <LogoutButton onLogout={() => setAuth({
          token: null,
          user: null,
        })}/>
          <h1>Scrap note</h1>
          <CardContainer></CardContainer>
        </div> :
        <LoginButton onLogin={setAuth}/>
      }
    </div>
  );
}

export default App;
