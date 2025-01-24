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
    <section className='flex flex-wrap items-center justify-center gap-6 py-8 max-w-[1440px]'>
        <p>OUR TRUSTED PARTNERS</p>
{images.map((pic, i)=>(
    <img key={i} src={pic} alt="" />
))}

    </section>
  )
}

export default LogoArea