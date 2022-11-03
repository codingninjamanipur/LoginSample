import {GoogleLogin} from 'react-google-login';

export const clientId= "787582282976-j82k0buglku4cdcrkk2s4h11dmevv833.apps.googleusercontent.com"


/*const onSuccess = (response) => {
    console.log(response);

}

const onFailure = (response) => {
    console.log(response);
}*/



export function Login({onSuccess,onFailure}) {

    return (
        <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
    />
    )


}