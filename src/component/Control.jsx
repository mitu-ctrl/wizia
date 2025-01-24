import React from 'react'

function Control() {

    const CardData = [
        {
            icon: '/i1.png',
            title: 'You&apos;re in Control',
            des: 'aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.'
        },
        {
            icon: '/i2.png',
            title: 'Infinitely Scalable',
            des: 'Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.'
        },
        {
            icon: '/i3.png',
            title: 'Incredibly Flexible',
            des: 'Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.'
        },]

    return (
        <section className='grid grid-col-1 md:grid-cols-3 justify-center items-center gap-6 py-20 mx-16 max-w-[1440px]' >

            {CardData.map((data, i) => (
                <div key={i} className='bg-[#002228] w-[360px] h-[260px] p-4 rounded-xl hover:translate-y-2 duration-500 trasition'>
                    
                    <img src={data.icon} alt="" className='w-12 h-12'/>

                    <h3 className='font-bold text-2xl py-3'>{data.title}</h3>

                    <p className='text-gray-400 pr-4'>{data.des}</p>


                </div>
            ))}
        </section>

    )
}

export default Control