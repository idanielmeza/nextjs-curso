import { Entry } from '../../interfaces';
import { EntriesState } from './';

type EntriesType = 
| { type: 'Add-Entry', payload: Entry}
| { type: 'isAdding-Entry', payload: boolean}
| { type: 'Updated-Entry', payload: Entry}
| { type: 'Refresh-Data', payload: Entry[]}
| { type: 'Delete-Entry', payload: string}

export const entriesReducer = (state: EntriesState, action: EntriesType): EntriesState=>{
     switch(action.type){
          case 'Add-Entry':
               return {
                    ...state,
                    entries: [...state.entries, action.payload]
                }
          case 'isAdding-Entry':
               return {
                    ...state,
                    isAddingEntry: action.payload
               }
          
          case 'Updated-Entry':
               return {
                    ...state,
                    entries: state.entries.map(entry =>{
                         if(entry._id === action.payload._id){
                              entry.status = action.payload.status;
                              entry.description = action.payload.description;
                         }
                         return entry;
                    })
               }

          case 'Delete-Entry':
               return {
                    ...state,
                    entries: state.entries.filter(entry => entry._id !== action.payload)
               }
          
          case 'Refresh-Data':
               return {
                    ...state,
                    entries: [...action.payload]
               }

          default:
               return state
     }
}
