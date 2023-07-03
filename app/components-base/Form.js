'use client'

import { useForm } from 'react-hook-form'

export default function Form() {
    const { register, handleSubmit, formState} = useForm()

    const onSubmit = (data) => {
      console.log(data)
    }

    const form = ` 
      flex flex-col gap-4 max-w-md mx-auto `
    const button = ` 
      LinkStyle1 self-end tracking-wider uppercase pb-3 
        hover:text-[--primary] `

    const inputStyles = {
      input: ` 
        w-full bg-transparent py-4 pl-6 border-b-2 
          focus:border-[--primary] placeholder:uppercase `,
      error: ` 
        text-end text-red-500 text-sm `,
    }

    return (
          <form className={form} 
            onSubmit={handleSubmit(onSubmit)}>
            <InputText register={register} formState={formState}
              name='name'              
              styles={inputStyles}
            />
            <InputEmail register={register} formState={formState}
              name='email'      
              styles={inputStyles}
             />
            <InputText register={register} formState={formState}
              name='message'
              styles={inputStyles}
              validatorType='minLength'
              validatorValue={10}
              invalidMessage='Must be at least 10 characters'             
            />
            <button className={button}
              type='submit'>
              send message
            </button>
          </form>
    )
}

export function InputText({ name, styles,
required='true', emptyMessage='Please complete field', 
validatorType, validatorValue, invalidMessage, 
register, formState}) {

    const validationObject = {}
    required && (validationObject.required = {value:true, message: emptyMessage})
    validatorType && (validationObject[validatorType] = {value:validatorValue, message:invalidMessage})

    const errorName = styles.error + (formState.errors[name] ? ' opacity-1 transition-opacity' : ' opacity-0 ')

    return (
      <div>
        <input className={styles.input}               
          placeholder={name}  
          {...register(name, validationObject)}/>
        <p className={errorName}>{formState.errors[name] ? formState.errors[name].message : 'hidden' }</p>
      </div>
    )
}

export function InputEmail({ name, styles,
required='true', emptyMessage='Please complete field', 
invalidMessage='Please enter a valid email address', 
register, formState}) {

    const validationObject = {}
    required && (validationObject.required = {value:true, message: emptyMessage})
    validationObject.pattern = {
      value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
      message:invalidMessage
    }

    const errorName = styles.error + (formState.errors[name] ? ' opacity-1 transition-opacity' : ' opacity-0 ')

    return (
      <div>
        <input className={styles.input}           
          placeholder={name}  
          {...register(name, validationObject)}/>
        <p className={errorName}>{formState.errors[name] ? formState.errors[name].message : 'hidden' }</p>
      </div>
    )
}

