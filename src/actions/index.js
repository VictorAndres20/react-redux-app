export const SET_USER_SESSION_ACTION = 'SET_USER_SESSION';

export const login = (message, token) => ({
    type: SET_USER_SESSION_ACTION,
    data:{message, token}
});

/** This are only tests, dont copy to notes */
export const TEST_ONE_ACTION = 'TEST_ONE';

export const testOne = (text) => ({
    type: TEST_ONE_ACTION,
    data:{text}
});