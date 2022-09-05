import { createContext } from 'react';
import { Entry } from '../../interfaces';

interface ContextProps {
     entries: Entry[]; 
     isAddingEntry: boolean;  //Falta el tipo de dato del arreglo
     addNewEntry: (description: string) => void;
     setIsAddingEntry: (isAddingEntry: boolean) => void;
     updateEntry: (entry: Entry, showSnackbar?: boolean) => void;
     deleteEntry: (_id: string) => void;
}

export const EntriesContext = createContext({} as ContextProps);