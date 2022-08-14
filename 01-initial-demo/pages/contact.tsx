import Link from 'next/link'
import MainLayout from '../components/laouts/MainLayout'


export default function Contact() {
  return (
    <MainLayout>
      <h1 className='title'>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className='description'>
          Get started by editing{' '}
          <code className='code'>pages/contact.js</code>
        </p>
    </MainLayout>
  )
}
