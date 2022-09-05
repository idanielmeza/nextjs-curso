import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"

import NextLink from 'next/link';

import { FC, useContext } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import { UIContext } from "../../context/ui";
import Link from "@mui/material/Link";

export const Navbar: FC = () => {

  const {openSideMenu} = useContext(UIContext)

  return (
    <AppBar position='sticky'>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
                onClick={openSideMenu}
            >
                <MenuIcon />
            </IconButton>
            <NextLink href='/' passHref>
              <Link underline='none' color='white'>
                <Typography variant='h6'>OpenJira</Typography>
              </Link>
            </NextLink>
        </Toolbar>
    </AppBar>
  )
}
