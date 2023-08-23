// src/reducers/jobReducer.js
const initialState = {
    jobs: []
};

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_JOB':
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            };
        default:
            return state;
    }
};

export default jobReducer;
