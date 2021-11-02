import { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../firebase/firebase";

const AuthContext = createContext();

// Hook for child components to get the auth object...
// ... and re-render when it changes

export const useAuth = () => {
    return useContext(AuthContext)
}

// Provider hook that creates auth object and handles state
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logout = () => {
        return auth.signOut().then(() => {
            setUser(null);
        })
    };

    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email);
    }

    const updateEmail = (email) => {
        return user.updateEmail(email)
    }

    const updatePassword = (password) => {
        return user.updatePassword(password);
    }

    /**
     * Subscribe to user on mount
     * This sets state in the callback it will cause any 
     * component that utilises this hook to re-render with the latest auth object.
     */
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user)
            setIsAuthenticating(false)   
        });

        return () => unsubscribe();
    }, []);

    const values = {
        user, 
        isAuthenticating,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={values}>
            {!isAuthenticating && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;