import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AgencePlusProche from './components/zone1/Agence plus proche/agenceplusproche';
import AideContact from './components/zone1/Aide & contact/aide&contact';
import Navbar from './components/zone1/navbar';
import Home from './components/zone1/home/home';
import Zonepub from './components/zone2/zonepub';
import Zone3 from './components/zone3/zone3';
import Zone4 from './components/zone4/zone4';
import Zone5 from './components/zone5/zone5';
import SignIn from './components/zone1/Espace client/SignIn';
import SignUp from './components/zone1/Espace client/SignUp';
import Dashboard from './components/dashbord/Dashboard';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Navbar' element={<Navbar/>}/>
      <Route path='/AgencePlusProche' element={<AgencePlusProche/>}/>
      <Route path='/AideContact' element={<AideContact/>}/>
      <Route path='/EspaceClient' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/Zonepub' element={<Zonepub/>}/>
      <Route path='/zone3' element={<Zone3/>} />
      <Route path='/zone4' element={<Zone4/>}/>
      <Route path='zone5' element={<Zone5/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
