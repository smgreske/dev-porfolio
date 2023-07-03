
export default function LinkOverlayContainer({link1Title, link1Path, link2Title, link2Path, children}) {

  const imageContainer =`
    relative
  `
  const a =`
    LinkStyle1 inline-block tracking-normal pb-3 
      hover:HoverStyle1
  `
  const overlay =`
    hidden absolute inset-0 opacity-0 bg-black 
      hover:opacity-80 hover:transition-opacity
    lg:FlexCenter lg:flex-col lg:gap-3 
  `

  return (
    <div className={imageContainer}>
        {children}
        <div className={overlay}>
          {link1Title && <a className={a} href={link1Path}>{link1Title}</a >}
          {link2Title && <a  className={a} href={link2Path}>{link2Title}</a>}
        </div>
      </div>
    )
  }

  {/* <LinkOverlayContainer
    link1Title={}
    link1Path={}
    link2Title={}
    link2Path={}>
    {}
  </LinkOverlayContainer>  */}