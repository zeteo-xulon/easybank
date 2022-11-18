import { useState, createContext } from "react";

export const DataContext = createContext()

export default function DataProvider({children}){
  const [phoneSize, setPhoneSize] = useState(false);
  return(
    <DataContext.Provider value={{phoneSize, setPhoneSize}}>
      {children}
    </DataContext.Provider>
  )
}