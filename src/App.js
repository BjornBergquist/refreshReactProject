import React from 'react'
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import {Routing} from './routes/Routing'
import './shared/global/css/Global.css'
import { UserProvider } from './shared/global/provider/UserProvider';

function App() {
  return (

    <UserProvider>
      <Routing>
        <NavigationBar />
      </Routing>
    </UserProvider>
  );
}

export default App;
