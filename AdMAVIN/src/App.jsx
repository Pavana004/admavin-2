import React from 'react';
import "./App.css";
import { Route } from "react-router-dom"
import Parents from './components/Parents';
import Application from './cantainer/Application';
import System from './cantainer/System';
import Library from './cantainer/Library';
import User from './cantainer/User';
import Adam from './cantainer/Adam';

const App = () => {

  return (
    <>
      <Route path="/" component={Parents} />
      <Route path="/app" component={Application} />
      <Route path="/system" component={System} />
      <Route path="/library" component={Library} />
      <Route path="/user" component={User} />
      <Route path="/adam" component={Adam} />
    </>

  )



}
export default App