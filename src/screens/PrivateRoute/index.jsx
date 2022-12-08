import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
    const userSelector = useSelector(state => state.users)

    const authUser = () => {
        if (userSelector && userSelector.data.message === "OK") {
            return true
        } else {
            return false
        }
    }

    return authUser()
        ? children
        : <Navigate to={{ pathname: '/' }} />
 };

export default PrivateRoute;