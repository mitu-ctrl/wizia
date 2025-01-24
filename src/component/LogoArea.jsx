import React from 'react'




function LogoArea() {
const images =[
'/BackHub logo.png',
'/AMD logo.png',
'/CableLabs logo.png',
'/DBS logo.png',
'/EasyEuro logo.png',

]
    
  return (
    <section className='bg-[#07292F]'>
      <p className='text-center text-primary pt-4'>OUR TRUSTED PARTNERS</p> 
       <div className='flex flex-wrap items-center justify-center gap-6 py-8 max-w-[1440px]'>
{images.map((pic, i)=>(
    <img key={i} src={pic} alt="" className='hover:bg-[#031d21] hover:rounded transition duration-350 ' />
))}
        </div>
        


    </section>
  )
}

export default LogoArea