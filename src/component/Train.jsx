import React from 'react'


function Train() {

    const data =[
        'Quick to ramp',
        'Quick to scale up',
        'Easy to optimize',
        'Works with all your existing tools'

    ]

    

  return (
    <section className=" min-h-screen flex flex-col items-center justify-center p-6 bg-no-repeat mx-10"
    style={{
      backgroundImage: "url(/hero.png)",
    }}>

        <div className="text-left mb-8">
            <h4 className='text-4xl font-bold'>Train your aiDR on your...</h4>
            <p className='text-4xl text-primary italic font-semibold py-2'>
            prefered email st|
            </p>
            <p className='text-xl font-thin text-gray-400 py-6'>You&apos;re in control. Train your aiDR on <br />elements of your Marketing strategy.</p>
       
            
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-6 items-center justify-center ">

{data.map((item, i)=>(
  <li key={i} className="flex items-center gap-2 space-x-2 text-primary">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-[#14BCB2] fill-[#09423e]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

{item}
  </li>

))}

</ul>
</div>
    </section>
  )
}

export default Train