import React, {createContext, useState} from "react";

const appContext = createContext()

function AppContextProvider({children}){
    const [petOnEdit, setPetOnEdit] = useState({})

    return (
        <appContext.Provider value={{petOnEdit, setPetOnEdit}}>
            {children}
        </appContext.Provider>
    )
}

export {appContext, AppContextProvider};