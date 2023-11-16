import { useEffect, useState } from 'react';

export const useToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if(!token){
      const authToken = window.sessionStorage.getItem("authToken");
      setToken(authToken);
    }
  },[token]);

  const clearToken = () => {
    setToken(null);
  };

  return { token, setToken, clearToken };
}