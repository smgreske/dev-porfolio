import PictureContainer from './components-base/PictureContainer.js'
import ProjectsSection from './components-project/ProjectsSection.js'
import HeroSection from './components-project/hero-section/HeroSection'
import SkillsSection from './components-project/SkillsSection.js'
import ContactSection from './components-project/ContactSection.js'

import imgProfileM from './images/image-profile-mobile.webp'
import imgProfileT from './images/image-profile-tablet.webp'
import imgProfileD from './images/image-profile-desktop.webp'
import project1Small from './images/thumbnail-project-1-small.webp'
import project1Large from './images/thumbnail-project-1-large.webp'
import project2Small from './images/thumbnail-project-2-small.webp'
import project2Large from './images/thumbnail-project-2-large.webp'
import project3Small from './images/thumbnail-project-3-small.webp'
import project3Large from './images/thumbnail-project-3-large.webp'
import project4Small from './images/thumbnail-project-4-small.webp'
import project4Large from './images/thumbnail-project-4-large.webp'
import project5Small from './images/thumbnail-project-5-small.webp'
import project5Large from './images/thumbnail-project-5-large.webp'
import project6Small from './images/thumbnail-project-6-small.webp'
import project6Large from './images/thumbnail-project-6-large.webp'

import Form from './components-base/Form.js'

const skillsArray = [
  ['HTML', 4],
  ['CSS', 4],
  ['Javascript', 4],
  ['Accessibility', 4],
  ['React', 3],
  ['Sass', 3],
]

const projectsArray = [
  {
    title:'Design Portfolio', 
    images:[project1Small, project1Large], 
    tech:['html', 'css'], 
    projectLink:'#', 
    codeLink:'#',
    altText:'altText'
  },
  {
    title:'E-learning Landing Page', 
    images:[project2Small, project2Large], 
    tech:['html', 'css'], 
    projectLink:'#', 
    codeLink:'#',
    altText:'altText'
  },
  {
    title:'Todo Web App', 
    images:[project3Small, project3Large], 
    tech:['html', 'css', 'javascript'], 
    projectLink:'#', 
    codeLink:'#',
    altText:'altText'
  },
  {
    title:'Entertainment Web App', 
    images:[project4Small, project4Large], 
    tech:['html', 'css', 'javascript'], 
    projectLink:'#', 
    codeLink:'#',
    altText:'altText'
  },
  {
    title:'Memory Game', 
    images:[project5Small, project5Large], 
    tech:['html', 'css', 'javascript'], 
    projectLink:'#', 
    codeLink:'#',
    altText:'altText'
  },
  {
    title:'Art Gallery Showcase', 
    images:[project6Small, project6Large], 
    tech:['html', 'css', 'javascript'], 
    projectLink:'#', 
    codeLink:'#',
    altText:'altText'
  },
]

export default function Home() {

  const main = `
    max-w-[--max-width-body] mx-[--margin-mobile]
    md:mx-[--margin-tablet]
    lg:FixedToAutoMargin    
  `

  return (
      <main className={main} >
        <HeroSection>
          <PictureContainer 
            tabletBreakpoint={'650px'}
            desktopBreakpoint={'1000px'}
            srcMobileImage={imgProfileM} //required
            srcTabletImage={imgProfileT}
            srcDesktopImage={imgProfileD}
            altText={'profile picture'} //required
          />
        </HeroSection >
        <hr className='text-[--color-1]'/>
        <SkillsSection 
          skillsArray={skillsArray}/>
        <hr className='text-[--color-1]'/>
        <ProjectsSection 
          projectsArray={projectsArray}/>
        <ContactSection/>
      </main>
  )
}
