import UserContext from "./UserContext";
import React from "react";

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
