const redirectReducer = (state = false, action) => {
    switch(action.type) {
        case 'REDIRECT': 
            let b = true;
            return b;
        case 'REDIRECT_LOGOUT':
            let c = false;
            return c;
        default:
            return state;
    }
}

export default redirectReducer;