import axios from "../api/axios";
import useAuth from "./UseAuth";


const UseRefreshToken = () => {
    const { auth, setAuth } = useAuth();
  
    const refresh = async () => {
      try {
        console.log('Refreshing');
        console.log('Auth: ' + auth?.email)
        const response = await axios.get(
          '/api/v1/auth/refresh',
          {
            withCredentials: true
          }
        );
  
        const newToken = response.data.token;
        const newRoles = response.data.roles;

        console.log('Previous Auth:', JSON.stringify(auth));
      console.log('New Token:', newToken);
      console.log('New Roles:', newRoles);

    setAuth((prev) => ({
        ...prev,
        token: newToken,
        roles: newRoles,
      }));
  
        return newToken;
      } catch (error) {
        console.error('Error refreshing token:', error);
        throw error; // Rethrow the error to be handled by the caller
      }
    };
  
    return refresh;
  };

export default UseRefreshToken