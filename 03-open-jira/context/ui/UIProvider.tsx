import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
    sidemenuOpen: boolean;
    isDragging: boolean;
}

const UI_INITITAL_STATE: UIState = {
    sidemenuOpen: false,
    isDragging: false
}

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITITAL_STATE)

    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' });
    }

    const closeSideMenu = () => {
        dispatch({ type: 'UI - Close Sidebar' });
    }

    const startDragging = () => {
        dispatch({ type: 'Start Dragging' });
    }

    const stopDragging = () => {
        dispatch({ type: 'End Dragging' });
    }

    return (
        <UIContext.Provider value={{
            ...state,
            openSideMenu,
            closeSideMenu,
            startDragging,
            stopDragging
        }}>
            {children}
        </UIContext.Provider>
    )
}