import { API_ROOT, HEADERS } from '../constants';
import ReduxThunk from 'redux-thunk';

export const userLoginFetch = user => {
    return dispatch => {
        return fetch(`${API_ROOT}/api/v1/login`, {
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify({ user })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                    // Here you should have logic to handle invalid login credentials.
                    // This assumes your Rails API will return a JSON object with a key of
                    // 'message' if there is an error
                    alert(data.message)
                    console.log(data.message)
                } else {
                    localStorage.setItem("token", data.jwt)
                    console.log(data);
                    dispatch(loginUser(data.user))
                    dispatch(loggedIn())
                }
            })
    }
}

export const getProfileFetch = () => {
    console.log('profile fetch')
    return dispatch => {
        const token = localStorage.token;
        if (token) {
            return fetch(`${API_ROOT}/auth/profile`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.message) {
                        // An error will occur if the token is invalid.
                        // If this happens, you may want to remove the invalid token.
                        console.log(data.message);
                        localStorage.removeItem("token");
                    } else {
                        console.log('success fetch profile', data);
                        dispatch(loginUser(data));
                        dispatch(setRedirect());
                    }
                })
        }
    }
}

export const toggle = () => ({
    type: 'TOGGLE'
});

export const selectCategory = (category) => ({
    type: 'SELECT_CATEGORY',
    payload: category,
});

export const submitSearch = () => ({
    type: 'SUBMIT_SEARCH',
});

export const videoResults = (videos) => ({
    type: 'VIDEOS',
    payload: videos,
});

export const backToCategory = () => ({
    type: 'BACK_TO_CATEGORY',
});

export const sendUserInfo = (userInfo) => ({
    type: 'USER_INFO',
    payload: userInfo,
})

export const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
});

const loggedIn = () => ({
    type: 'SIGN_IN',
});

export const logout = () => ({
    type: 'LOGOUT_USER'
});

export const setRedirect = () => ({
    type: 'REDIRECT'
})

export const setRedirectLogout = () => ({
    type: 'REDIRECT_LOGOUT'
})


