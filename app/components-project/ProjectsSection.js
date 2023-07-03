import LinkOverlayContainer from '../components-base/LinkOverlayContainer'
import PictureContainer from '../components-base/PictureContainer'

export default function ProjectsSection({ projectsArray }) {
    return (
      <div className=' my-20 '>
        <div className=' FlexCenter mb-10 '>
          <h2 className='text-4xl md:text-7xl '>Projects</h2>

        </div>
        <div className=' uppercase grid md:grid-cols-2 gap-10 '>
          {projectsArray.map( (current) => (
            <div className=' grid gap-3 '>             
              <LinkOverlayContainer
                link1Title={'View Project'}
                link1Path={current.projectLink}
                link2Title={'View Code'}
                link2Path={current.codeLink}>
                  <PictureContainer 
                    tabletBreakpoint={'650px'}
                    desktopBreakpoint={'1000px'}
                    srcMobileImage={current.images[0]}
                    srcTabletImage={current.images[1]}
                    altText={current.altText}/>
              </LinkOverlayContainer> 
              <h3 className='text-24 font-bold'>{current.title}</h3>
              <div className='flex gap-4'>
                {current.tech.map( (tech) => (
                  <p className='flex gap-4 text-20 opacity-80 mb-4'>{tech} </p>
                ))}
              </div>
              <div className='flex gap-8 lg:hidden'>
                <a  className='LinkStyle1 inline-block tracking-wider border-b-2 border-[--primary] pb-3 hover:HoverStyle1 ' href={current.projectLink}>View Project</a>
                <a  className='LinkStyle1 hover:HoverStyle1 inline-block tracking-wider border-b-2 border-[--primary] pb-3' href={current.codeLink}>View Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}
