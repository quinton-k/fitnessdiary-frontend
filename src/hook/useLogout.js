import axios from "../api/axios";
import useAuth from "./UseAuth";

const useLogout = () => {

    const {setAuth} = useAuth();

    const logout = async() => {

        setAuth({});

        try {
            const response = await axios('/api/v1/auth/signout', {
                withCredentials: true
            });
        } catch(error) {
            console.error(error);
        }
    }
    return logout;
}

export default useLogout;