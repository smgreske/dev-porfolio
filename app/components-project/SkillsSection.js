export default function SkillsSection({ skillsArray }) {
  
  
  return (   
    <div className='relative my-10 grid justify-center text-center gap-6 md:grid-cols-2 md:text-start md:gap-12 lg:grid-cols-3'>
      {skillsArray.map( (current) => (
        <div>
          <p className='text-3xl md:text-4xl'>{current[0]}</p>
          <p className='opacity-80 md:text-lg'>{current[1]} years experience</p>  
        </div>
      ))}
      <div className='absolute -z-10 w-[600px] md:translate-x-[-50px] md:bottom-[110px] lg:translate-x-[150%] lg:translate-y-[150%]'>
        <img src="/static/pattern-rings.svg"/>
      </div>
    </div>
  )
}
