import { GoogleLogout } from 'react-google-login';
import {clientId} from './Login';


function Logout({onLogSuccess}) {

   
    return (
        <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onLogSuccess}
        >
        </GoogleLogout>  )

}

export default Logout;