export const selectPost = (post) => {
    return {
        type: 'POST_SELECTED',
        payload: post
    }
};
export const selectUser = (user) => {
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
export const getData = (data) => {
    return {
        type: 'DATA_REQUEST',
        payload: data
    }
};