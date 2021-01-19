const LogoutReducer = (state = false, action) => {
    switch(action.type) {
        case 'REDIRECT_LOGOUT':
            let b = true;
            return b;
        default: 
            return false;
    }
}

export default LogoutReducer;