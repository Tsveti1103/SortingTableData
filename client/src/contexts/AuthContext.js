import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import useLocalStorage from "../hooks/useLocalStorage";
import * as userService from "../services/userService";


export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [user, setUser] = useLocalStorage();
    let isAuthenticated;
    user ? isAuthenticated = true : isAuthenticated = false;
    const registerUser = async (data) => {
        try {
            const result = await userService.register(data)
            setUser(result);
            navigate('/');
        }
        catch (err) {
            throw err;
        }
    }
    const userLogin = async (data) => {
        try {
            const result = await userService.login(data);
            setUser(result);
            navigate('/');
        }
        catch (err) {
            throw err;
        };
    };
    const userLogout = () => {
        setUser();
    };
   
    const contextValues = {
        userLogin,
        userLogout,
        registerUser,
        user,
        isAuthenticated,
    }

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );

}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
};