export const TEST_ONE_ACTION = 'TEST_ONE';

export const setTestOne = payload => {
    return {
        type: TEST_ONE_ACTION,
        payload
    };
};