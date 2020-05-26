export const initialState = {
    // 2D array for all the cells returning if they
    // are alive for now I am setting the dimensions min
    // for mvp. I will give the user option to change them
    // for stretch 0 is dead 1 is alive
    rows=0,
    columns,
    isAlive: []
    isRunning: false
};

export const reducer = (state, action) => {
    switch (action.type) {
        ...state,
    rows
        // payload is expected to pass number of rows and columns
        // case 'SETUP':
        //     return {
        //         ...state,
        //         action.payload.rows
        //     };
		case 'LOGINFETCH':
return {
    ...state,
    login: {
        ...state,
        loginLoading: true,
        loginSuccess: false
    }
};
		case 'LOGINSUCCESS':
return {
    ...state,
    login: {
        ...state,
        loginLoading: false,
        loginSuccess: true,
        user_id: action.payload.id,
        message: action.payload.message
    }
};
		case 'LOGINFAILURE':
return {
    ...state,
    login: {
        loginLoading: false,
        loginSuccess: false,
        user: '',
        message: ''
    }
};
		case 'ADDITEM':
return {
    ...state,
    itemsUpdated: {
        addingItemLoading: true,
        addingItemSuccess: false
    }
};
		case 'ADDITEMSUCCESS':
return {
    ...state,
    itemsUpdated: {
        addingItemLoading: false,
        addingItemSuccess: true
    }
};
		case 'RESET':
return {
    ...state,
    itemsUpdated: {
        addingItemLoading: false,
        addingItemSuccess: false
    }
};
		default:
return state;
	}
};