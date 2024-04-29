import React, { createContext, useContext, useState } from 'react';

export type AdminContextType = {
    value: boolean;
    toggleValue: (currentValue: boolean) => void;
};

export const AdminRightsContext = createContext<AdminContextType | undefined>(undefined);

export const AdminRightsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [value, setValue] = useState<boolean>(false);

    const toggleValue = () => {
        setValue((prevValue) => !prevValue);
    };

    return (
        <AdminRightsContext.Provider value={{ value, toggleValue }}>
            {children}
        </AdminRightsContext.Provider>
    );
};


export const useAdminRights = () => {
    const context = useContext(AdminRightsContext);
    if (!context) {
        throw new Error('useAdminRights must be used within an AdminRightsProvider');
    }
    return context;
};
