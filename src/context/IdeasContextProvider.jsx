"use client";

import { createContext, useContext, useState, useCallback } from "react";

const IdeasContext = createContext();

export const IdeasContextProvider = ({ children }) => {
    const [ideas, setIdeas] = useState([]);
    const [loading, setLoading] = useState(false);

    const addIdea = useCallback((newIdea) => {
        setIdeas((prevIdeas) => [newIdea, ...prevIdeas]);
    }, []);

    const setAllIdeas = useCallback((allIdeas) => {
        setIdeas(allIdeas);
    }, []);

    const clearIdeas = useCallback(() => {
        setIdeas([]);
    }, []);

    return (
        <IdeasContext.Provider value={{ ideas, setAllIdeas, addIdea, clearIdeas, loading, setLoading }}>
            {children}
        </IdeasContext.Provider>
    );
};

export const useIdeas = () => {
    const context = useContext(IdeasContext);
    if (!context) {
        throw new Error("useIdeas must be used within IdeasContextProvider");
    }
    return context;
};
