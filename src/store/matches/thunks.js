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
        const response = await fetch('https://mcga-final-back.vercel.app/matches', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token'),
            },
        });
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
                'Authorization': localStorage.getItem('token'),
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
        const response = await fetch(`https://mcga-final-back.vercel.app/matches/${match.id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Authorization': localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "homeScore": match.homeScore,
                "awayScore": match.awayScore,
            }),
        });
        await response.json();
        if (response.status !== 200) throw new Error('Error');
        dispatch(editMatch(match));
        dispatch(editMatchLoading(false));
    } catch (error) {
        dispatch(editMatchError());
    }
}

export const deleteMatchThunk = (id) => async (dispatch) => {
    try {
        dispatch(deleteMatchLoading(true));
        const response = await fetch(`https://mcga-final-back.vercel.app/matches/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        if (response.status !== 200) throw new Error('Error');
        dispatch(deleteMatch(id));
        dispatch(deleteMatchLoading(false));
    } catch (error) {
        dispatch(deleteMatchError());
    }
}