const videoReducer = (state = [], action ) => {
    switch(action.type) {
        case 'VIDEOS': 
            return action.payload
        default: 
            return state;
    }
}

export default videoReducer;