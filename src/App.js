import logo from './logo.svg';
import './App.css';


import { useEffect,useState } from 'react';
import { clientId, Login } from './Auth/Login';
import Logout from './Auth/Logout';
import {gapi} from 'gapi-script';
import GoogleLogin from 'react-google-login';

function App() {


  const [ profile, setProfile ] = useState([]);

  const onSuccess = (res) =>{
    setProfile(res.profileObj);
  }

  const onLogOutSuccess = (res) =>{
    setProfile(null);
  }

  useEffect( ()=> {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope:""      
    })
  };

  gapi.load('client:auth2',start);

});

return (
    <div>
      { profile ?  <Logout onLogSuccess={onLogOutSuccess}/> : <Login onSuccess={onSuccess}/>}
    </div>
  );
}

export default App;
