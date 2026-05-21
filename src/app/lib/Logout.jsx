import { authClient } from "@/lib/auth-client";
import { Dropdown } from "@heroui/react";
import Router from "./Router";

const Logout = ({children}) => {
        async function logout() {
        await authClient.signOut();
        <Router route={"/login"}/>
    }
    
    return (
        <Dropdown.Item key="logout"  onClick={logout} variant="danger" >
            {children}
        </Dropdown.Item>
    );
};

export default Logout;