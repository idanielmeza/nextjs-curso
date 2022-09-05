import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import { useRouter } from "next/router";
import { FC,DragEvent, useContext } from "react";
import { UIContext } from "../../context/ui";
import { Entry } from "../../interfaces";
import { dateFunctions } from '../../utils';



interface Props {
    entry: Entry;
}

export const EntryCard: FC<Props> = ({entry}) => {

    const router = useRouter();

    const {startDragging, stopDragging} = useContext(UIContext);

    const onDragStart = (e: DragEvent<HTMLDivElement>) => {
        
        //todo: modificar el estado para inidicar que estoy haciendo drag
        e.dataTransfer.setData('text', entry._id);
        startDragging();

    }

    const onDragEnd = (e: DragEvent<HTMLDivElement>) => {
        //todo : fin del drag
        stopDragging();
    }

    const onClick = ()=>{
        router.push(`/entries/${entry._id}`);
    }

  return (
    <Card 
        onClick={onClick}
        sx={{ marginBottom: 1 }}
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{whiteSpace: 'pre-line'}}>{entry.description}</Typography>
            </CardContent>

            <CardActions sx={{display: 'flex', justifyContent: 'end', paddingRight: 2}}>
                <Typography variant='body2'>{dateFunctions.getFormartDistanceToNow(entry.createdAt)}</Typography>
            </CardActions>

        </CardActionArea>
    </Card>
  )
}
