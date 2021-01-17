const submitSearchReducer = (state = false, action) => {
    switch(action.type) {
        case 'SUBMIT_SEARCH': 
        console.log('search');
            let b = true;
            return b;
        case 'BACK_TO_CATEGORY': 
            console.log('back');
            let c = false;
            return c;
        default: 
        return state;
    }
}

export default submitSearchReducer;