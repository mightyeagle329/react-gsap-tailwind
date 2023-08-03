// MyContext.tsx
import { createContext } from 'react';

interface MyContextType {
    data: number;
    updateData: (newData: number) => void;
}

const defaultContext: MyContextType = {
    data: 0,
    updateData: (newData: number) => { } // Replace void with the return type of updateData
};

const MyContext = createContext<MyContextType>(defaultContext);

export default MyContext;