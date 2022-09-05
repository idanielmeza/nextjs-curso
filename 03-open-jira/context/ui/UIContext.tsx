import { createContext } from 'react';

interface ContextProps {
    sidemenuOpen: boolean;
    isDragging: boolean;
     ///methods
    openSideMenu: () => void;
    closeSideMenu: () => void;

    startDragging: () => void;
    stopDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);