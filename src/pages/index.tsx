import { useRef, useState } from 'react'
import api from './utils/api'
import { IWeatherProps } from './utils/types';
import FormWeather from '@/layouts/FormWeather';
import CardWeather from '@/layouts/CardWeather';

export default function Home() {

	const inputRef = useRef<HTMLInputElement>(null);
	const [weatherData, setWeatherData] = useState<IWeatherProps>();

	const handleSubmit = (e: any) => {
		e.preventDefault()
		fetchWeather(inputRef.current?.value);
	}

	const fetchWeather = async (inputValue: any) => {
		const response = await api.post(`/api/weather`, inputValue)
		if(response){
			setWeatherData(response.data)
		}
	}
	
	return (
		<>
			<div className='app container flex flex-col items-center'>
				<FormWeather handleSubmit={handleSubmit} inputRef={inputRef}/>
				<CardWeather weatherData={weatherData}/>
			</div>
		</>
	)
}
