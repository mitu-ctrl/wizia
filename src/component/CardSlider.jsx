import React from 'react'
import { useState } from 'react';

function CardSlider() {
const Review = [
    {
        Rev:'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        person:'John Doe',
        prof: 'Chief Strategy Officer Company'
    },
    {
        Rev:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet, non voluptates consequuntur magnam dolores fugiat.',
        person:'Jenny Doe',
        prof: 'Chief Strategy Officer Company'
    },
    {
        Rev:' adipiscing elit. Nunc vulputate Qorem ipsum dolor sit amet, consectetur libero et velit interdum, ac aliquet odio mattis.',
        person:'Xrox Doe',
        prof: 'Chief Strategy Officer Company'
    },
]

const [Current, setCurrent] = useState (0);

const Prev = ()=>{
    setCurrent((previous)=> previous === 0 ? Review.length - 1: previous - 1)
};
const Next = ()=>{
    setCurrent((NextCard)=> NextCard === Review.length - 1 ? 0 : NextCard + 1)
};

  return (
    <section className='container py-8'>
<div className='flex items-center justify-between px-2'>
<svg onClick={Prev} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 bg-[#96ACAF33] rounded-lg stroke-primary">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
<div className='bg-[#002228] py-10 rounded-xl flex flex-col items-center w-3/4 h-3/4'>

<img src="/coma.png" alt="" />
    
<p className='py-16 text-3xl font-thin text-center text-gray-400'>{Review[Current].Rev}</p>
<p className='text-primary text-xl'>{Review[Current].person}</p>
<p className='text-gray-400'>{Review[Current].prof}</p>

       
</div>

<svg onClick={Next} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 bg-[#96ACAF33] rounded-lg stroke-primary">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</div>

<div className="flex justify-center space-x-2 mt-6">
        {Review.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              Current === index
                ? "bg-teal-400"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  )
}

export default CardSlider