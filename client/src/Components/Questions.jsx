import React, { useEffect, useState } from 'react'
import Dummy from '../Data/Dummy'

export default function Questions() {
    // console.log(Dummy)
    const [checked, setChecked] = useState(undefined)

    const Questions = Dummy[0]

    useEffect(() => {
        console.log(Questions)
    })

    const onSelect = () => { }

    return (
        <div className=''>
            <div>
                <div className='w-full flex flex-col justify-center'>
                    <div className='py-4'>
                        <span className='text-xl sm:text-3xl py-0 sm:py-6'>{Questions?.question}</span>
                    </div>
                    <div className='pt-2 sm:pt-6 pb-10'>
                        <ul key={Questions?.id} className='flex gap-y-4 flex-col'>
                            {
                                Questions?.options.map((Questions, index) => (
                                    <li key={index} className='flex cursor-pointer' >
                                        <input
                                            id={`question${index}-option`}
                                            onChange={() => onSelect(index)}
                                            type="radio"
                                            value={false}
                                            name="option"
                                            className="w-6 h-6 cursor-pointer bg-white accent-black border-gray-300 outline-none" />
                                        <label
                                            htmlFor={`question${index}-option`}
                                            className="ml-2 text-base sm:text-lg cursor-pointer font-medium text-black dark:text-gray-300">
                                            {Questions}
                                        </label>

                                        {/* <input 
                                        type="radio"
                                            value={false}
                                            name='options'
                                            id={`question${index}-option`}
                                            onChange={() => onSelect(index)}
                                        />
                                        <label className='text-primary' htmlFor={`question${index}-option`}>{Questions}</label> */}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
