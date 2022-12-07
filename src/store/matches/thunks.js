import {
    saveMatch,
    saveMatchLoading,
    saveMatchError,
    addMatch,
    addMatchLoading,
    addMatchError,
    editMatch,
    editMatchLoading,
    editMatchError,
    deleteMatch,
    deleteMatchLoading,
    deleteMatchError,
} from './actions'

export const saveMatches = () => async (dispatch) => {
    try {
        dispatch(saveMatchLoading(true));
        const response = await fetch('https://mcga-final-back.vercel.app/matches');
        const matchResponse = await response.json();
        if (response.status !== 200) throw new Error('Error');
        dispatch(saveMatch(matchResponse));
        dispatch(saveMatchLoading(false));
    } catch (error) {
        dispatch(saveMatchError());
    }
}

export const addMatchThunk = (match) => async (dispatch) => {
    try {
        dispatch(addMatchLoading(true));
        const response = await fetch('https://mcga-final-back.vercel.app/matches/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(match),
        });
        const matchResponse = await response.json();
        if (response.status !== 201) throw new Error('Error');
        dispatch(addMatch(matchResponse));
        dispatch(addMatchLoading(false));
    } catch (error) {
        dispatch(addMatchError());
    }
}

export const editMatchThunk = (match) => async (dispatch) => {
    try {
        dispatch(editMatchLoading(true));
        const response = await fetch(`https://mcga-2022-backend-tm.vercel.app/api/products/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            	'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(match),
        });
        const matchResponse = await response.json();
        if (response.status !== 200) throw new Error('Error');
        dispatch(editMatch(matchResponse));
        dispatch(editMatchLoading(false));
    } catch (error) {
        dispatch(editMatchError());
    }
}

export const deleteMatchThunk = (id) => async (dispatch) => {
    try {
        dispatch(deleteMatchLoading(true));
        const response = await fetch(`https://mcga-2022-backend-tm.vercel.app/api/products/${id}`, {
            method: 'DELETE',
        });
        if (response.status !== 200) throw new Error('Error');
        dispatch(deleteMatch(id));
        dispatch(deleteMatchLoading(false));
    } catch (error) {
        dispatch(deleteMatchError());
    }
}