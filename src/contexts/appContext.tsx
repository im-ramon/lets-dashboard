import React, { useState, useEffect, createContext, ReactNode } from 'react';
import { api } from '../services/api';

interface AppContextData {
    user: object;
    setUser: React.Dispatch<React.SetStateAction<object>>
    signOut: () => Promise<void>
}

interface AppProviderProps {
    children: ReactNode;
}

export const AppContext = createContext({} as AppContextData)


export function AppProvider({ children }: AppProviderProps) {
    const [user, setUser] = useState<object>({})

    async function signOut() {
        api.defaults.headers.common['Authorization'] = ''
        setUser({})
    }

    return (
        <AppContext.Provider value={{
            user,
            setUser,
            signOut
        }}>
            {children}
        </AppContext.Provider>
    )
}
