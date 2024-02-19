import { createContext } from "react";
import { data } from "./My_data";

export const Mycontexte = createContext();

 export const MycontexteProvider = ({children}) =>{

    return (
        <Mycontexte.Provider value={data}>
         {children}
        </Mycontexte.Provider>
    )
}