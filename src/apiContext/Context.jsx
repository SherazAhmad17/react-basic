import { createContext } from "react";

const myContext = createContext();

    let name = "Sheraz";
    let age = 22;

const MyContextProvider = ({children})=>{
    return(
        <myContext.Provider value={{name,age}}>
            {children}
        </myContext.Provider>
    )
}

export {myContext, MyContextProvider}