import React from 'react'
import {Button} from "@heroui/react";

function Leads() {
  return (
    <section className="bg-cover bg-center h-screen grid grid-cols-1 md:grid-cols-2 items-center max-w-[1440px]"
    style={{
      backgroundImage: "url(/Img.png)",
    }}>
      <div className=' mx-16  w-1/2'>
<p className='text-primary text-xl'>AI SDRs (aiDRs)</p>
<h3 className='text-4xl md:text-6xl'>More <span className='italic'>leads, </span> less <span className='italic'>people.</span></h3>
<p className='text-gray-300 text-xl my-3'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>

<Button className='bg-[#0FF1F6] rounded-full'>Sign Up for the Beta</Button>
</div>
   
    </section>
  )
}

export default Leads