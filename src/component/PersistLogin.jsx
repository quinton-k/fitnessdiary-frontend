import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import UseRefreshToken from "../hook/UseRefreshToken";
import useAuth from "../hook/UseAuth";

const PersistLogin = () => {

    const [isLoading, setIsLoading] = useState(true);
    const refresh = UseRefreshToken();
    const {auth,persist} = useAuth();

    useEffect(() => {
        let isMounted = true;
        const verifyRefreshToken = async () => {
            try {
                await refresh();

            } catch(error) {
                console.error(error);
            } finally {
                isMounted && setIsLoading(false);
            }
        }

        !auth?.token ? verifyRefreshToken() : setIsLoading(false);
        return () => isMounted = false;
    },[])

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`);
        console.log(`AT: ${JSON.stringify(auth?.token)}`);
    },[isLoading])

    return (
        <>
            {!persist? <Outlet/> : isLoading ? <p>Loading...</p>: <Outlet/>}
        </>
    )
}

export default PersistLogin