


import './globals.css'
import { Inter } from 'next/font/google'

// components
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// links
const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About',
  route: '/about'
},
{
  label: 'Posts',
  route: '/posts'
}]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation links={links}/>
        {children}
      </body>
    </html>
  )
}