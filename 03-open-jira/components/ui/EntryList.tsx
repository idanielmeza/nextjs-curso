import { List, Paper } from "@mui/material"
import { FC, useContext, useMemo, DragEvent } from "react";
import { EntryStatus } from "../../interfaces"
import { EntryCard } from "./"
import { EntriesContext } from '../../context/entries';
import { UIContext } from "../../context/ui";

import styles from "./EntryList.module.css"

interface Props{
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({status}) => {

  const {entries, updateEntry} = useContext(EntriesContext);

  const {isDragging, stopDragging} = useContext(UIContext)

  const entriesByStatus = useMemo(()=> entries.filter(entry => entry.status === status) , [entries]);

  const onDropEntry= (e: DragEvent<HTMLDivElement>)=>{
    const id = e.dataTransfer.getData('text');
    
    const entry = entries.find(entry => entry._id === id)!;

    entry.status = status;

    updateEntry(entry);

    stopDragging();
  }

  const allowDrop = (e: DragEvent<HTMLDivElement>)=>{
      e.preventDefault();
  }

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={ isDragging ? styles.dragging : ''}
    >
        <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', 
        '&::-webkit-scrollbar': { display: 'none' },
         backgroundColor: 'transparent', padding: 1}}>
            
            <List sx={{ opacity: isDragging ? 0.2 : 1 ,transition: 'all 0.3s'}}>
                {
                    entriesByStatus.map(entry => (
                        <EntryCard key={entry._id} entry={entry} />
                    ))
                }
            </List>
        </Paper>

    </div>

  )
}
