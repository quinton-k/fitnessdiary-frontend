import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import UseRefreshToken from "./UseRefreshToken";
import useAuth from "./UseAuth";

const useAxiosPrivate = () => {

    const refresh = UseRefreshToken();
    const {auth} = useAuth();

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if(!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.token}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if(error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);//we need to return the error if the above fails
            }
        );

        // This is a cleanup function called after a component is mounted
        return () => {
            axiosPrivate.interceptors.response.eject(responseIntercept); //this removes the interceptor to prevent them from piling up
            axiosPrivate.interceptors.request.eject(requestIntercept);
        }

    },[auth,refresh])

    return axiosPrivate;
}

export default useAxiosPrivate;