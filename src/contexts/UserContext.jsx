import { createContext, useState } from 'react';

const UserContext = createContext(); //UserContext will be an object
// Returns a Context object.
// This object has two main properties UserProvider and UserContext

const getUserFromToken = () => {
  const token = localStorage.getItem('token');

  if (!token) return null;

  return JSON.parse(atob(token.split('.')[1])).payload;
    //payload is username and id

};



function UserProvider({ children }) {//children any react component become a children inside components )provider 

    const [user, setUser] = useState(getUserFromToken());

    const value = { user, setUser }//  
// This object will be passed to the Provider, so any component can:
// Read user
// Update user using setUser

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };

