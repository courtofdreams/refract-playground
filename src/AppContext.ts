import { createContext } from 'react';


type AppContextType = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
};


export const AppContext = createContext<AppContextType>({} as AppContextType);