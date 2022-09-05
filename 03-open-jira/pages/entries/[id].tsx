import { ChangeEvent, useState, useMemo, FC, useContext } from 'react';
import { GetServerSideProps } from 'next'
import { EntriesContext } from '../../context/entries';

import { Card, Grid, CardHeader, CardContent, TextField, CardActions, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, capitalize, IconButton } from '@mui/material';
import { Layout } from '../../components/layouts'
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Entry, EntryStatus } from '../../interfaces/entry';
import { dbEntries } from '../../database';
import { useRouter } from 'next/router';
import { dateFunctions } from '../../utils';



const validStats: EntryStatus[] = ['pendding', 'in-progress', 'finished'];

interface Props{
    entry: Entry;
}

const EntryPage: FC<Props> = ({entry}) => {

    const router = useRouter();

    const { updateEntry , deleteEntry} = useContext(EntriesContext);

    const  [inputValue,setInputValue] = useState(entry.description);
    const [status, setStatus] = useState<EntryStatus>(entry.status);
    const [touched, setTouched] = useState(false);

    const onTextFieldChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const onStatusChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value as EntryStatus);
    }

    const isNotValid =  useMemo(()=> inputValue.length <= 0 && touched,[inputValue,touched]);

    const onSave = () => {
        if(inputValue.trim().length === 0) return;
        const updatedEntry: Entry ={
            ...entry,
            status,
            description: inputValue
        }

        updateEntry(updatedEntry, true);
    }

    const onDelete = () => {
        deleteEntry(entry._id);    
        router.push('/');    
    }

    return (
        <Layout title={inputValue.substr(0,20)+ '...'}>
            <Grid
                container
                justifyContent='center'
                sx={{ marginTop: 2 }}
            >
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader
                            title={`Entrada:`}
                            subheader={`Creada ${dateFunctions.getFormartDistanceToNow(entry.createdAt)}`}
                        >
                        </CardHeader>
                        <CardContent>
                            <TextField
                                sx={{ marginTop: 2, marginButtom: 1 }}
                                fullWidth
                                placeholder='Nueva entrada'
                                autoFocus
                                multiline
                                label='Nueva entrada'
                                value={inputValue}
                                onChange={onTextFieldChanged}
                                helperText={isNotValid && 'Ingrese un valor'}
                                onBlur={() => setTouched(true)}
                                error={isNotValid}
                            />
                            <FormControl>
                                <FormLabel>Status:</FormLabel>
                                <RadioGroup
                                    row
                                    value={status}
                                    onChange={onStatusChanged}
                                >
                                    {
                                        validStats.map((option) => (
                                            <FormControlLabel
                                                key={option}
                                                value={option}
                                                control={<Radio />}
                                                label={capitalize(option)}
                                            />

                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>

                        </CardContent>

                        <CardActions>
                            <Button
                                startIcon={<SaveAsOutlinedIcon />}
                                variant='contained'
                                fullWidth
                                onClick={onSave}
                                disabled={inputValue.length <= 0}
                            >
                                Save
                            </Button>
                        </CardActions>


                    </Card>
                </Grid>

                <IconButton sx={{
                    position: 'fixed',
                    bottom: 30,
                    right: 30,
                    backgroundColor: 'red'
                }}
                    onClick={onDelete}
                >
                    <DeleteOutlinedIcon />
                </IconButton>

            </Grid>
        </Layout>
    )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps = async ({params}) => {
    
    const {id} = params as {id:string};

    const entry = await dbEntries.getEntryById(id);


    
    if(!entry){
        return {
            redirect:{
                destination:'/',
                permanent:false
            }
        }
    }


    return {
        props: {
            entry
        }
    }
}

export default EntryPage
