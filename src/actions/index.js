export const toggle = () => ({
    type: 'TOGGLE'
});

export const selectCategory = (category) => ({
    type: 'SELECT_CATEGORY',
    payload: category,
});