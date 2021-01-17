
const userInfoReducer = (state = {}, action) => {
    switch(action.type) {
        case 'USER_INFO':
            let info = action.payload;
            return {...info};
        default:
            return state;
    }
}

export default userInfoReducer;