import { Chip, Grid, Typography, Link } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { ShopLayout } from "../../components/layouts"
import NextLink from 'next/link';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre', width: 300 },
    { field: 'fullname', headerName: 'Nombre', width: 300 },
    {
        field: 'paid',
        headerName: 'Pagado',
        description: 'Muestra informacion si esta pagada la orden.',
        width: 200,
        renderCell: (params) => {
            return (
                params.row.paid ? <Chip color='success' label='Pagado' variant='outlined'/>
                : <Chip color='error' label='Pendiente de pago' variant='outlined'/>
            )
        }
    },
    {
        field: 'id',
        headerName: 'Ver',
        width: 100,
        sortable: false,
        renderCell: (params) => {
            return <NextLink href={`/orders/${params.row.id}`} passHref>
                <Link>
                    Ver orden
                </Link>
            </NextLink>
        }
    }
]

const rows = [
    { id: 1, fullname: 'Daniel Ledezma', paid: true},
    { id: 2, fullname: 'Matias Ledezma', paid: false},
    { id: 3, fullname: 'Oscar Ledezma', paid: true},
    { id: 4, fullname: 'Eduardo Ledezma', paid: true},
    { id: 5, fullname: 'Daniel Ledezma', paid: true},
    { id: 6, fullname: 'Matito Tomatito', paid: false},
    { id: 7, fullname: 'Oscar Mawi', paid: true},
]

const HistoryPage = () => {
  return (
    <ShopLayout title='Historial de ordenes' pageDescription="Historial de ordenes del cliente">
        <Typography variant='h1' component='h1'>Historial de ordenes</Typography>

        <Grid container>

            <Grid item xs={12} sx={{height: 650, width: '100%'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}

                />
            </Grid>

        </Grid>

    </ShopLayout>
  )
}

export default HistoryPage