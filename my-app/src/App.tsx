import type { User } from 'firebase/auth';
import React, { useState } from 'react';
import CardContainer from './components/CardContainer';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { Image } from 'react-bootstrap'

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
    <div style={{width: '800px', margin: 'auto'}} className="App">
      {
        state.isLogged ? 
        <div>
          <div style={{marginTop: '40px', textAlign: 'right'}}>
          <Image roundedCircle src={state?.user?.photoURL ?? ''} alt='profile' width='40px'></Image>
          <span style={{marginLeft: '10px', marginRight: '10px'}}>{state?.user?.displayName}</span>
          <LogoutButton onLogout={() => setAuth({
          token: null,
          user: null,
        })}/>
          </div>
          <h1 style={{textAlign: 'left', marginBottom: '40px'}}>Scrap note</h1>
          <CardContainer></CardContainer>
        </div> :
        <div style={{width: '100%', margin: 'auto', marginTop: '100px', textAlign: 'center'}}>
          <LoginButton onLogin={setAuth}/>
        </div>
      }
    </div>
  );
}

export default App;
