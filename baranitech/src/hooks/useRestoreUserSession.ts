import { useNavigate } from "react-router";
import { useUser } from "../contexts/userContext"
import { useEffect } from "react";

interface StoredUser {
    id: number;
    username: string;
    email: string;
    phone: string;
}


export const UseRestoreUserSession = () => {
    const { login, user } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        const stored = sessionStorage.getItem(import.meta.env.VITE_APP_USER_SESSION_NAME);
        if (stored && !user) {
            const parsedUser: StoredUser = JSON.parse(stored);
            
            login(parsedUser);

            // navigate(import.meta.env.VITE_ROUTE_ADMIN_URL);
            navigate(location.pathname + location.search, { replace: true });
        }
    }, [login, user, navigate])


}