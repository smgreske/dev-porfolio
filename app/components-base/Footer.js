export default function Header({ footerTitle, children }) {

  const footer =`
    bg-[--neutral-3] flex justify-center py-2`

  const div =`
    w-full text-center flex flex-col items-center mb-16 max-w-[--max-width-body]  
    md:mb-10 md:justify-between md:flex-row md:px-[--margin-tablet] 
    lg:mb-22
  `

  const h2 =`
    text-2xl mb-5 
    md:text-[2rem] md:mb-0
  `

  return (
    <footer className={footer}>
      <div className={div}>
        <a href='/'>
         <h2 className={h2}>{footerTitle}</h2></a>
        {children}
      </div>
    </footer>
  )
}
