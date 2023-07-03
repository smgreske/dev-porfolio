import Link from 'next/link'
import { socialLinksAndSvgs } from './_socialLinksAndSvgs'


// const socialArray = [
//   { 
//     name: 'gitHub',
//     path: '/'
//   },
//   { 
//     name: 'linkedIn',
//     path: '/'
//   },
//   { 
//     name: 'twitter',
//     path: '/'
//   },
// ]

export default function SocialNavigation({ socialArray }) {
    
    return (
      <nav className='flex gap-6'>
        {socialArray.map( (current) => (
          <Link href={socialLinksAndSvgs[current.name].url + current.path}>
            <div className='w-6'>            
            {socialLinksAndSvgs[current.name].svg}
            </div>
          </Link>
        ))}
      </nav>
  )
}

