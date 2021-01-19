const LogoutReducer = (state = false, action) => {
    switch(action.type) {
        case 'TEST':
            let b = true;
            return b;
        default: 
            return false;
    }
}

export default LogoutReducer;