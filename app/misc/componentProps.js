function componentProps() {
  return (
    <>

    <Footer 
      headerTitle=''>
      *
    </Footer>

    <Header 
      headerTitle=''>
      *
    </Header>

    <InputEmail register={register} formState={formState}
      name=''      
      styles={{}}
      required={true}
      emptyMessage=''
      invalidMessage=''
      />

    <InputText register={register} formState={formState}
      name=''
      styles={{}}
      required={true}
      emptyMessage=''
      validatorType=''
      validatorValue={1}
      invalidMessage=''             
    />

    <PictureContainer 
      tabletBreakpoint={'650px'}
      desktopBreakpoint={'1000px'}
      srcMobileImage={img} 
      srcTabletImage={img}
      srcDesktopImage={img}
      altText={''} 
    />

    <SocialLinks
      socialArray={[]}/>    
    </>
  )
}
