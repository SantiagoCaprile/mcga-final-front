import {
    saveUser,
    saveUserLoading,
    saveUserError,
} from "./actions";

export const saveUsers = () => async (dispatch) => {
    try {
        dispatch(saveUserLoading(true));
        const response = await fetch("https://mcga-final-back.vercel.app/users");
        const userResponse = await response.json();
        if (response.status !== 200) throw new Error("Error");
        dispatch(saveUser(userResponse));
        dispatch(saveUserLoading(false));
    } catch (error) {
        dispatch(saveUserError());
    }
};