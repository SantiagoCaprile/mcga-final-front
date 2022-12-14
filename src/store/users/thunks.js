import {
    saveUser,
    saveUserLoading,
    saveUserError,
} from "./actions";

export const saveUsers = (user) => async (dispatch) => {
    try {
        dispatch(saveUserLoading(true));
        const response = await fetch("https://mcga-final-back.vercel.app/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const userResponse = await response.json();
        localStorage.setItem("token", userResponse.token);
        if (response.status !== 200) throw new Error("Error");
        dispatch(saveUser(userResponse));
        dispatch(saveUserLoading(false));
    } catch (error) {
        dispatch(saveUserError());
    }
};