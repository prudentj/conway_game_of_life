export const initialState = {
    // 2D array for all the cells returning if they
    // are alive for now I am setting the dimensions min
    // for mvp. I will give the user option to change them
    // for stretch 0 is dead 1 is alive
    isAlive: [],
    isRunning: false
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLESTART':
            return {
                ...state,
                isRunning: !state.isRunning
            };
        default:
            return state;
    }
};