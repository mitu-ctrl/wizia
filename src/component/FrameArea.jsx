import React from 'react'

function  FrameArea() {

    const persent =[
        {
            per:'32%',
            des:'Improvement in Open Rates'
        },
        {
            per:'75%',
            des:'Improvement in Ramp Time'
        },
        {
            per:'32%',
            des:'Improvement in Meetings Booked'
        },
    ]

  return (
    <section  className=" min-h-screen grid grid-col-1 md:grid-cols-2 items-center justify-center p-6 bg-no-repeat bg-center bg-cover mx-4 md:mx-10"
    style={{
      backgroundImage: "url(/Frame.png)",
    }}>
<div className='ml-2 md:ml-16'>
    <h4 className='font-bold text-4xl'>Allocate effort where your reps make an inpact.</h4>
    <p className='text-thin text-primary italic text-3xl py-2'>Let us handle the rest.</p>
    <p className='text-xl text-gray-400 py-6'>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>

<div className='flex gap-6'>
    {persent.map((e, i)=> (
        <div className='w-1/3'>
        <span className='text-4xl font-extrabold text-primary py-4'>{e.per}</span>
        <p className='text-gray-400'>{e.des}</p></div>
    ))}
</div>


</div>



    </section>
  )
}

export default FrameArea