import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { entriesReducer , EntriesContext} from './';
import { entriesAPI } from '../../apis';
import { useSnackbar } from 'notistack';


export interface EntriesState{
     entries: Entry[];
     isAddingEntry: boolean;
}

const Entries_INITITAL_STATE: EntriesState = {
     entries: [
        
     ],
    isAddingEntry: false,
}


export const EntriesProvider: FC<PropsWithChildren> = ({children}) => {
     const [state, dispatch] = useReducer(entriesReducer, Entries_INITITAL_STATE)
     const { enqueueSnackbar } = useSnackbar();

     const addNewEntry = async(description: string)=>{
        
        const {data} = await entriesAPI.post<Entry>('/entries', {description});

        dispatch({
            type: 'Add-Entry',
            payload: data
        })
     }

     const setIsAddingEntry = (isAddingEntry: boolean)=>{
        dispatch({
            type: 'isAdding-Entry',
            payload: isAddingEntry
        })
     }

     const updateEntry = async({_id,description,status}: Entry, showSnackbar=false )=>{

        try {
            const {data} = await entriesAPI.put<Entry>(`/entries/${_id}`, {description,status});

            dispatch({
                type: 'Updated-Entry',
                payload: data
            })

            if(showSnackbar){
                enqueueSnackbar('Entrada actualizada', {
                    variant: 'success',
                    autoHideDuration: 1500,
                    anchorOrigin:{
                        vertical: 'top',
                        horizontal: 'right'
                    }
                });
            }
            

        } catch (error) {
            console.log(error);
        }
        
        
     }

     const deleteEntry = async(_id: string)=>{
        try {
            await entriesAPI.delete(`/entries/${_id}`);

            dispatch({
                type: 'Delete-Entry',
                payload: _id
            })
        } catch (error) {
            console.log(error);
        }
     }

     const refreshEntries = async()=>{
        const {data} = await entriesAPI.get<Entry[]>('/entries');
        dispatch({
            type: 'Refresh-Data',
            payload: data
        })
     }

     useEffect(() => {
        refreshEntries();
     }, [])
     

     return (
          <EntriesContext.Provider value={{
               ...state,
               //Methods
                addNewEntry,
                setIsAddingEntry,
                updateEntry,
                deleteEntry
          }}>
              {children}
          </EntriesContext.Provider>
)
}