import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useAuthContext = () => {
    const context = useContext(AuthContext);
   
    return context;
};