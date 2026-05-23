"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const { data: sessionData, refetch } = useSession();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (sessionData?.user) {
            setUser(sessionData.user);
        }
        setLoading(false);
    }, [sessionData]);

    const updateUserName = (newName) => {
        if (user) {
            setUser({
                ...user,
                name: newName
            });
        }
    };

    const refetchUser = async () => {
        await refetch();
    };

    return (
        <UserContext.Provider value={{ user, loading, updateUserName, refetchUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within UserContextProvider");
    }
    return context;
};
