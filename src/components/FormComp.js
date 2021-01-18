import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import { Redirect } from "react-router-dom";
import {API_ROOT} from '../constants';
import {sendUserInfo} from '../actions';
import {getProfileFetch} from '../actions';
import {setRedirect} from '../actions';


const headers = {'X-Requested-With': 'XMLHttpRequest'};

const FormComp = () => {
    // const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();
    const redirect = useSelector(state => state.redirect);

    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
        console.log(response.tokenObj);

        const userInfo = {
            name: response.profileObj.givenName,
            imageUrl: response.profileObj.imageUrl,
        }
        axios.post(`${API_ROOT}/auth/google_oauth`,
        { 
            profileObj:  response.profileObj,
            access_token: response.tokenObj,
        },
        headers)
        .then(res => {
            console.log('logedin', res.data);
            localStorage.setItem('token', res.data.jwt);
            localStorage.setItem('google_token', res.data.user.google_token);
            dispatch(sendUserInfo(userInfo));
            dispatch(setRedirect());   
        })
        .catch(error => console.log(error));
    }

    return (
        <>
        {
            redirect ?  <Redirect to="/favorites" /> : null
        }
            <div className="google-button">               
                <GoogleLogin
                clientId="692431735633-1obtk8vn6tqp47tenh8j3bpdeh20ahk4.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            </div>

        </>

    );
}

export default FormComp;