import React, { useState, ReactNode } from 'react';
import MyContext from '../context/MyContext';

interface MyProviderProps {
    children: ReactNode;
}

const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
    const [data, setData] = useState<number>(0);

    const updateData = (newData: number): void => {
        setData(newData);
    };

    return (
        <MyContext.Provider value={{ data, updateData }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider