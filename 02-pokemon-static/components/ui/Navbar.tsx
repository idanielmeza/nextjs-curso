import { Text, useTheme, Spacer, Link } from "@nextui-org/react";
import Image from "next/image";
import LinkNext from "next/link";

export const Navbar = () => {

  const { theme } = useTheme();

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'start',
      alignItems: 'center',
      padding: '0 20px',
      backgroundColor: theme?.colors.gray50.value,
    }}>

      <Image src='/Pokeball.svg' alt='icono de la app' width={70} height={70} />
      <LinkNext href='/' passHref>
        <Link>
          <Text color="white" h2>P</Text>
          <Text color='white' h3>okemon</Text>
        </Link>
      </LinkNext>

      <Spacer css={{ flex: 1 }} />

      <LinkNext href='/favorites' passHref>
        <Link>
          <Text color='white'>Favoritos</Text>
        </Link>
      </LinkNext>
      

    </div>
  )
}
