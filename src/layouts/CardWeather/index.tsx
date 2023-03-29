import React, { useEffect, useState } from 'react'
import { IWeatherProps } from '@/pages/utils/types'
import Image  from 'next/image'
import { FaSun } from "react-icons/fa";

export interface ICardWeatherProps {
    weatherData: IWeatherProps | undefined
}

export default function CardWeather({ weatherData }: ICardWeatherProps) {
    
    // const verifyCardColorByIcon = (icon: string) => {
    //     const colorCard:any = {
    //         '02d': '#983628',
    //         '01d': '#D8BD8A',
    //         '04d': '#9ca3af',
    //         '10n': '#374151',
    //         '50n': '#fca5a5',
    //         'default': '#86efac'
    //     }

    //     return `bg-[${colorCard[icon]}]` || `bg-[${colorCard.default}]`
    // }
// console.log("+++++",verifyCardColorByIcon('10n'))
    return (
        <>  
            {weatherData &&
                <div className={`card ${weatherData.weather[0].color} text-white w-[600px] h-[90px] flex flex-row justify-start items-center mt-10 rounded`}>
                    <Image 
                        src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                        alt=""
                        width={50}
                        height={50}
                    />
                    <div className='flex flex-col ml-4'>
                        <h4 className='text-4xl'>{weatherData.weather[0].description}</h4>
                        <div className='mt-2 flex flex-row'>
                            <h2 className='text-1xl font-bold mb-2'>{weatherData.main.temp} ºC</h2>
                            <div className="ml-3 border-l-4 flex items-center w-100">
                                <FaSun className='ml-1 mr-1'/>
                                <h6 >{weatherData.sys.sunrise}</h6> - 
                                <h6 >{weatherData.sys.sunset}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
