import React from 'react'
import {MyFirstComponent} from './components/myfirstcomponent/MyFirstComponent'
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import {Routing} from './routes/Routing'
import './shared/global/Global.css'

function App() {
  return (

      <Routing>
       
      <NavigationBar />
      </Routing>

  );
}

export default App;
