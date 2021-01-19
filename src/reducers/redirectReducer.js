const redirectReducer = (state = false, action) => {
    switch(action.type) {
        case 'REDIRECT': 
            let b = true;
            return b;
        default:
            return state;
    }
}

export default redirectReducer;