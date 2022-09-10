import { FC, useState } from 'react'
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { Layout } from '../components/layouts'
import Cookies from 'js-cookie'
import { GetServerSideProps } from 'next'
import axios from 'axios'

interface Props {
    theme: string
}

const TheChangerPage: FC<Props> = ({theme}) => {

    const [currentTheme, setCurrentTheme] = useState(theme);

    const onThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setCurrentTheme(value);
        Cookies.set('theme', value);
    }

    const onClick = async()=>{
        const {data} = await axios.get('/api/hello');
        console.log(data);
    }

    return (
        <Layout>
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Tema</FormLabel>
                        <RadioGroup
                            value={currentTheme}
                            onChange={onThemeChange}
                        >
                            <FormControlLabel value='light' control={<Radio />} label='Light' />
                            <FormControlLabel value='dark' control={<Radio />} label='Dark' />
                            <FormControlLabel value='custom' control={<Radio />} label='Custom' />
                        </RadioGroup>
                    </FormControl>

                    <Button
                        onClick={onClick}
                    >
                        Solicitud
                    </Button>

                </CardContent>
            </Card>
        </Layout>

    )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps =  async({req}) => {

    const {theme= 'light'} = req.cookies;

    const validTheme = ['light', 'dark', 'custom'].includes(theme) ? theme : 'light';

    return {
        props: {
            theme:validTheme    
        }
    }
}

export default TheChangerPage