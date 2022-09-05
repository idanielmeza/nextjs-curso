import { ChangeEvent, useContext, useState } from "react";

import { Box, Button, TextField } from "@mui/material"
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { EntriesContext } from "../../context/entries";


export const NewEntry = () => {

    const {addNewEntry, isAddingEntry, setIsAddingEntry} = useContext(EntriesContext)

    const [inputValue, setInputValue] = useState('')

    const [touched, setTouched] = useState(false)

    const onTextFieldChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        
    }

    const onSave = ()=>{
        if(inputValue.length === 0) return;
        addNewEntry(inputValue)
        setInputValue('')
        setTouched(false)
        setIsAddingEntry(false)
    }

    return (
        <Box sx={{
            marginBottom: 2,
            paddingX: 1
        }}>
            {
                !isAddingEntry ?
                    <Button
                        onClick={() => setIsAddingEntry(true)}
                        startIcon={<AddCircleOutlinedIcon />}
                        fullWidth
                        variant='outlined'

                    >
                        Agregar Tarea
                    </Button>
                    :
                    <>
                        <TextField
                            fullWidth
                            sx={{ marginTop: 2, marginBottom: 1 }}
                            placeholder='Nueva entrada'
                            autoFocus
                            multiline
                            label='Nueva Entrada'
                            helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
                            error={inputValue.length <= 0 && touched}
                            value={inputValue}
                            onChange={onTextFieldChanged}
                            onBlur={() => setTouched(true)}
                        />

                        <Box display='flex' justifyContent='space-between'>
                            <Button
                                onClick={() => setIsAddingEntry(false)}
                            >
                                Cancelar
                            </Button>

                            <Button
                                variant='outlined'
                                color='secondary'
                                endIcon={< SaveOutlinedIcon />}
                                onClick={onSave}
                            >
                                Guardar
                            </Button>
                        </Box>
                    </>
            }

        </Box>
    )
}
