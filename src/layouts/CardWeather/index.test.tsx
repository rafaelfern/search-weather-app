import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import FormWeather, { ICardWeatherProps } from './index'
import CardWeather from './index'
import fetchMock from 'jest-fetch-mock';
import axios from "axios";

const testWeatherDataResponse: any = {
    coord: { lon: -43.2075, lat: -22.9028 },
    weather: [
        {
        id: 802,
        main: 'Clouds',
        description: 'nuvens dispersas',
        icon: '03d'
        }
    ],
    base: 'stations',
    main: {
        temp: 25.23,
        feels_like: 26.08,
        temp_min: 24.98,
        temp_max: 28.97,
        pressure: 1015,
        humidity: 87
    },
    visibility: 7000,
    wind: { speed: 2.57, deg: 10 },
    clouds: { all: 40 },
    dt: 1679658432,
    sys: {
        type: 1,
        id: 8429,
        country: 'BR',
        sunrise: '07:34',
        sunset: '07:34'
    },
    timezone: 7200,
    id: 3451190,
    name: 'Rio de Janeiro',
    cod: 200
    
}

describe('<CardWeather />', () => {
    jest.mock("axios");
    
    it('should renders weather data when API call succeeds', async () => {
        const data = testWeatherDataResponse
        axios.post = jest.fn().mockResolvedValue({ data })
        const response = await axios.post('/api/weather', 'Rio de Janeiro')
        expect(response.data.name).toEqual(data.name)
    })

    it('should renders error when API call fails', async () => {

    })
})