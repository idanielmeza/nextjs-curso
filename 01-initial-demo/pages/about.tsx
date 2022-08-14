import Link from 'next/link'
import MainLayout from '../components/laouts/MainLayout'
import DarkLayout from '../components/laouts/DarkLayout'



export default function About() {
  return (
    <MainLayout>
      <DarkLayout>
      <h1 className='title'>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className='description'>
          Get started by editing{' '}
          <code className='code'>pages/about.js</code>
        </p>
      </DarkLayout>
      
    </MainLayout>
  )
}

About.getLayout = function getLayout(page: JSX.Element){

  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )

}