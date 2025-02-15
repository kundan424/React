// import React from "react";
// import UserContext from "./UserContext";
// import { useState } from "react";

// export default  UserContextProvider = ({children}) => {

//     const [user , setUser] = useState(null)

//  return (
//     <UserContext.Provider value={{user , setUser}} >
//         {children}
//     </UserContext.Provider >
//  )
// }


import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => { // ✅ Destructure children properly
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children} {/* ✅ This ensures wrapped components can access context */}
        </UserContext.Provider>
    );
};

export default UserContextProvider; // ✅ Correct default export
