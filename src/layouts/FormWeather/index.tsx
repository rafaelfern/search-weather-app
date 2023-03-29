import React, { LegacyRef } from 'react'

export interface IFormWeatherProps {
    handleSubmit: (inputValue: any) => void
    inputRef: LegacyRef<HTMLInputElement> | undefined
}

export default function FormWeather({ handleSubmit, inputRef}: IFormWeatherProps) {
  return (
    <>
    <h1 className="title mb-6 mt-4 py-4 text-5xl font-serif">Search Weather</h1>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input 
                    ref={inputRef}
                    type="text" 
                    placeholder='Enter city name'
                    className="px-4 py-3 rounded-sm mr-2"
                    onChange={() => {}}
                />
                <button type="submit" className='btn px-4 py-3 text-white rounded-sm'>
                    Search
                </button>
            </form>
        </div>
    </>
  )
}
