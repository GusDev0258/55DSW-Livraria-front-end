import React, { createContext, useContext, useState, ReactNode } from "react";

type UserDetails = {
  firstname: string;
  email: string;
  role: string;
};

const UserDetailsContext = createContext<{
  userDetails: UserDetails | null;
  setUserDetails: (details: UserDetails | null) => void;
}>({
  userDetails: null,
  setUserDetails: () => {}, 
});

type UserDetailsProviderProps = {
  children: ReactNode; 
};

export const UserDetailsProvider: React.FC<UserDetailsProviderProps> = ({ children }) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  return (
    <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserDetailsContext.Provider>
  );
};

export const useUserDetails = () => {
  return useContext(UserDetailsContext);
};
