import Form from '@/app/components-base/Form'

export default function ContactSection() {

    const section =' relative bg-[--neutral-3] text-center py-16 ExtendBackground '
    const h2 = ' text-40 mb-5 '
    const p = ' leading-8 mb-10 tracking-wider opacity-80 max-w-md mx-auto '
    const rings = ' absolute w-[600px] translate-x-[-65%] bottom-12 *md:translate-x-full **lg:translate-x-[-50%] '

    return (
        <section className={section}
          id='contact-section'>
          <h2 className={h2}>Contact</h2>
          <p className={p}>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>

          <Form/>

          <div className={rings}>
            <img src="/static/pattern-rings.svg"/>
          </div>

        </section>
    )
}
