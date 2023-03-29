export interface IWeatherProps {
    coord: ICoord,
    weather: IWeather[],
    base: string,
    main: IMain,
    visibility: number,
    wind: IWind,
    clouds: {},
    dt: number,
    sys: ISys,
    timezone: number,
    id: number,
    name: string,
    cod: number
}

interface ICoord {
    lon: number,
    lat: number
}

interface IWeather {
    id: number,
    main: string,
    description: string,
    icon: string,
    color: string
}

interface IMain {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
}

interface IWind {
    speed: number,
    deg: number
}

interface ISys {
    type: number,
    id: number,
    country: string,
    sunrise: string,
    sunset: string
}