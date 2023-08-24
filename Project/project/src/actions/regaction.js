export const addJob = (jobData) => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:8080/demo', {
            method: 'POST',
            body: JSON.stringify(jobData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        dispatch({
            type: 'ADD_JOB',
            payload: data
        });
    } catch (error) {
        console.error(error);
    }
};