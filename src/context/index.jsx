import React, { createContext, useReducer } from 'react';
import dataReducer from "../reducers/index";

export const ChatDataContext = createContext()

const ChatDataContextProvider = ({ children }) => {
    const initialState = {
        user: []
    };
    const [state, dispatch] = useReducer(dataReducer, initialState);

    return (
        <ChatDataContext.Provider value={{ state, dispatch }}>
            {children}
        </ChatDataContext.Provider>
    );
}

export default ChatDataContextProvider;