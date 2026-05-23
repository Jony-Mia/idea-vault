"use client";

import { createContext } from "react";
import { useSession } from "./auth-client";
const UserContext= createContext([]);

const Session = ({children}) => {
    let {data} = useSession();

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
};

export default Session;