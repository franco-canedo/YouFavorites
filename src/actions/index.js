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