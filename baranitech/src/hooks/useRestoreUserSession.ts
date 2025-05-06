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
        const stored = sessionStorage.getItem('baranitech-user');
        if (stored && !user) {
            const parsedUser: StoredUser = JSON.parse(stored);
            login(parsedUser);
            navigate('/ea532f28cda5ac4d4b037af546c61233/admin');
        }
    }, [login, user, navigate])


}