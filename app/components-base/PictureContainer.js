{/* <PictureContainer 
  tabletBreakpoint={'650px'}
  desktopBreakpoint={'1000px'}
  srcMobileImage={}
  srcTabletImage={}
  srcTabletImage={}
  altText={''}/> */}

export default function PictureContainer({desktopBreakpoint, tabletBreakpoint, srcMobileImage, srcTabletImage, srcDesktopImage, altText}) {

  return (
    <picture className='w-full block'>
      {srcDesktopImage && <source 
        srcSet={srcDesktopImage.src}
        media={`(min-width: ${desktopBreakpoint})`}/>}
      {srcTabletImage && <source
        srcSet={srcTabletImage.src}
        media={`(min-width: ${tabletBreakpoint})`}/>}
      <img src={srcMobileImage.src} alt={altText}/>   
    </picture>
  )
}
