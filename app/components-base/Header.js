export default function Header({ headerTitle, children }) {

  const header =`
    flex justify-center py-10
  `
  const div =`
    max-w-[--max-width-body] w-full flex flex-col items-center text-center 
    md:px-[--margin-tablet] md:justify-between md:flex-row
    lg:mx-[--margin-desktop] lg:mb-22
  `
  const h2 =`
    mb-5 
    md:text-4xl
    lg:mb-0
  `

  return (
    <header className={header}>
      <div className={div}>
        <a href='/'>
         <h2 className={h2}>{headerTitle}</h2></a>
        {children}
      </div>
    </header>
  )
}
