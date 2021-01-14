const submitSearchReducer = (state = false, action) => {
    switch(action.type) {
        case 'SUBMIT_SEARCH': 
            let b = true;
            return b;
        default: 
        return state;
    }
}

export default submitSearchReducer;