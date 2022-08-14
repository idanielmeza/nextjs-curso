import MainLayout from "../../components/laouts/MainLayout"
import Link from 'next/link'

const PrincingPage = () => {
  return (
    <MainLayout>
        <h1 className='title'>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className='description'>
          Get started by editing{' '}
          <code className='code'>pages/princing/index.js</code>
        </p>
    </MainLayout>
  )
}

export default PrincingPage