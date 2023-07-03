import './styles/global.css'
import { Space_Grotesk } from 'next/font/google'

import Header from './components-base/Header.js'
import SocialLinks from './components-base/SocialLinks.js'
import Footer from './components-base/Footer.js'

export const metadata = {
  title: 'Project Title',
  description: 'Project Description',
}

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
const socialArray = [

  { 
    name: 'twitter',
    path: '/'
  },
  { 
    name: 'facebook',
    path: '/'
  },
  { 
    name: 'discord',
    path: '/'
  },
]

export default function RootLayout({ children }) {

  const body =`
    bg-[--neutral-4] 
    text-[--neutral-1] 
    overflow-x-hidden 
    scroll-smooth
  `

    return (
      <html className={spaceGrotesk.className} lang="en">
        <body className={body}>
          <Header 
            headerTitle={'alanKeyes'}>
              <SocialLinks
                socialArray={socialArray}/>
          </Header>

          {children}

          <Footer 
            footerTitle={'alanKeyes'}>
              <SocialLinks
                socialArray={socialArray}/>
          </Footer>
        </body>
      </html>
    )
}
