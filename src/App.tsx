import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SignIn } from './components/auth/SignIn';
import { SignUp } from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import { ProjectCreate } from './components/projects/ProjectCreate';
import { ProjectDetails } from './components/projects/ProjectDetails';

function App() {
  return (
    <BrowserRouter>      
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/create' component={ProjectCreate} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
