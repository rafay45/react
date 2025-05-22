import React from "react";
import UserContext from "./UserContext";

export function ContextProvider({children}){
    const [user, setUser] = React.useState(null)

    return (
        <UserContext.Provider value={{user, setUser}}>
          {children}
        </UserContext.Provider>
    )
}
